import VirtualMachine from "./virtualMachine";

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

describe("Virtual Machine", () => {
  test("Implement Virtual Machine", () => {
    const v = new VirtualMachine(languageInstructions);
    expect(v instanceof VirtualMachine);
  });
  test("Execute VirtualMachine", () => {
    const v = new VirtualMachine(languageInstructions);
    expect(v.execute()).toStrictEqual({ a: 105 });
  });
});
