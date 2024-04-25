import exp from "constants";
import VirtualMachine from "./virtualMachine";

describe("Virtual Machine", () => {
  test("Implement Virtual Machine", () => {
    const v = new VirtualMachine("");
    expect(v instanceof VirtualMachine);
  });
  test("test that variable can be set", () => {
    const v = new VirtualMachine("set b 1");
    expect(v.execute()).toStrictEqual({ b: 1 });
  });
  test("test that variable can do addition+", () => {
    const tempCode = `
      set b 2
      add b 2
      `;
    const v = new VirtualMachine(tempCode);
    expect(v.execute()).toStrictEqual({ b: 4 });
  });
  test("test that var can -", () => {
    const tempCode = `
    set a 4
    sub a 2
    `;
    const v = new VirtualMachine(tempCode);
    expect(v.execute()).toStrictEqual({ a: 2 });
  });
  test("cannot substract undeclared variable", () => {
    const code = `
    sub m 10
    `;
    const v = new VirtualMachine(code);
    const logSpy = jest.spyOn(console, "error");

    v.execute();
    expect(logSpy).toHaveBeenCalledWith(
      `variable m is not declared, substraction not happened`
    );
  });
  test("test that virtualMachine cannot print undeclared variable", () => {
    const code = `
    print nada
    `;
    const v = new VirtualMachine(code);
    const logSpy = jest.spyOn(console, "error");
    v.execute();
    expect(logSpy).toHaveBeenCalledWith(
      `variable nada is not declared, cannot print`
    );
  });
  test("test that virtualMachine can print code", () => {
    const code = `
    set a 100
    print a
    `;
    const v = new VirtualMachine(code);
    const logSpy = jest.spyOn(console, "log");
    v.execute();
    expect(logSpy).toHaveBeenCalledWith(`VirtualMachine var value: 100`);
  });
  test("function scope is not read unless function is called", () => {
    const code = `
    set wow 20
    function functionX:
        add wow 10
        print wow
    end
    print wow
    `;
    const v = new VirtualMachine(code);
    const logSpy = jest.spyOn(console, "log");
    v.execute();
    expect(logSpy).toHaveBeenCalledWith("VirtualMachine var value: 20");
  });
  test("test the call function invocation", () => {
    const code = `set f 0
    function functionX:
        add f 5
        print f
        return
    end
    call functionX`;
    const v = new VirtualMachine(code);
    expect(v.execute()).toStrictEqual({ f: 5 });
  });
  test("Execute VirtualMachine code end to end", () => {
    const languageInstructions = `function functionY:
    sub a 2
    return
end
function functionX: 
    call functionY 
    sub a 1
    return
end
set a 0
add a 10
sub a 2
call functionX
add a 100
print a`;
    const v = new VirtualMachine(languageInstructions);
    expect(v.execute()).toStrictEqual({ a: 105 });
  });
});
