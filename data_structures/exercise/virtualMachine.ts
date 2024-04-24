import Stack from "../stack-list";

//Virtual Machine without function scope
//const languageInstructions = `set a 0
//add a 10
//sub a 2
//print a
//`;

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
/**
 * Create a Virtual Machine that reads the code in the syntax above
 * The idea is to recreate the call stack procedure of some programming language instructions above https://www.youtube.com/watch?v=Q2sFmqvpBe0
 * @param {T} item The language instructions to be pushed onto the VirtualMachine.
 */

export default class VirtualMachine {
  private instructionArr: string[];
  private functionNameToLineNumberMapping: Record<string, number>;
  private lineNumber: number;
  private memory: Record<string, number>;
  private stack: Stack<{ lineNumberToReturn: number }>;

  constructor(private instructions: string) {
    this.lineNumber = 0;
    this.stack = new Stack();
    this.memory = {};
    this.functionNameToLineNumberMapping = {};
    this.instructionArr = instructions
      .split("\n")
      .map((item) => item.trimStart());
  }

  execute() {
    while (this.lineNumber < this.instructionArr.length) {
      const instructionParts = this.instructionArr[this.lineNumber].split(" ");

      let value = 0;
      let functionIndex = 0;
      let searchForFunctionKey = "";
      switch (instructionParts[0]) {
        case "function":
          // get the function name to search within array
          const functionName = instructionParts[1].slice(0, -1);
          searchForFunctionKey = instructionParts.reduce(
            (acc, curr) => `${acc} ${curr}`
          );
          //find the index line of function
          functionIndex = this.instructionArr.indexOf(searchForFunctionKey);

          //save where the function is
          this.functionNameToLineNumberMapping[functionName] = functionIndex;

          break;

        case "call":
          searchForFunctionKey = instructionParts.reduce(
            (acc, curr) => `${acc} ${curr}`
          );
          functionIndex = this.instructionArr.indexOf(searchForFunctionKey);
          // memorise the index where function call occurred
          this.stack.push({ lineNumberToReturn: functionIndex });

          const executeFunction =
            this.functionNameToLineNumberMapping[instructionParts[1]];

          this.lineNumber = executeFunction;
          break;

        case "return":
          const tmp = this.stack.pop();
          if (tmp) {
            this.lineNumber = tmp.lineNumberToReturn;
          }
          break;
        case "set":
          value = parseInt(instructionParts[2]);
          this.memory[instructionParts[1]] = value;
          break;
        case "add":
          value = parseInt(instructionParts[2]);
          this.memory[instructionParts[1]] += value;
          break;
        case "sub":
          value = parseInt(instructionParts[2]);
          this.memory[instructionParts[1]] -= value;
          break;
        case "print":
          console.log(
            `VirtualMachine var value: ${this.memory[instructionParts[1]]}`
          );
          break;

        default:
          break;
      }
      this.lineNumber++;
    }
    return this.memory;
  }
}

const v = new VirtualMachine(languageInstructions);
v.execute();
