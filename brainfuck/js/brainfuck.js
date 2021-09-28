const runBtn = document.getElementById("run_button");
const stopBtn = document.getElementById("stop_button");
const minifyBtn = document.getElementById("minify_button");
const statusObj = document.getElementById("status");
const editor = document.getElementById("editor");
const inputArea = document.getElementById("input");
const outputConsole = document.getElementById("output");

runBtn.addEventListener("click", try_run);
minifyBtn.addEventListener("click", minify);

function try_run() {
    runBtn.className = "inactive_button";
    runBtn.removeEventListener("click", try_run);
    run_code();
    runBtn.className = "active_button";
    runBtn.addEventListener("click", try_run);
}

function run_code() {
    // Create a new 30,000 size array, with each cell initialized with the value of 0. Memory can expand.
    const MEMORY_SIZE = Number(document.getElementById("memory_size").value);
    const memory = new Array(MEMORY_SIZE).fill(0);
    // Instruction pointer (Points to the current INSTRUCTION)
    let ipointer = 0;
    // Memory pointer (Points to a cell in MEMORY)
    let mpointer = 0;
    // Address stack. Used to track addresses (index) of left brackets
    let astack = [];
    // Input pointer. Used to track which characters in the input section is being read
    let inputPointer = 0;

    let program = editor.value;
    let input = inputArea.value;
    let output = "";

    let end = false;

    while (!end) {
        switch (program[ipointer]) {
            case '>':
                if (mpointer == memory.length - 1)
                    /* If we try to access memory beyond what is currently available, expand array */
                    memory.push(0, 0, 0, 0, 0);
                mpointer++;
                break;
            case '<':
                if (mpointer > 0)
                    mpointer--;
                break;
            case '+':
                memory[mpointer]++;
                break;
            case '-':
                memory[mpointer]--;
                break;
            case '.':
                output += String.fromCharCode(memory[mpointer]);
                break;
            case ',':
                // Set a default value to return in case there is no input to consume
                let val = 0;

                // If input isn't empty
                if (inputPointer <= input.length) {
                    // Get the character code of the first character of the string
                    val = input.charCodeAt(inputPointer);
                }

                memory[mpointer] = val;
                break;
            case '[':
                if (memory[mpointer]) { // If non-zero
                    astack.push(ipointer);
                } else { // Skip to matching right bracket
                    let count = 0;
                    while (true) {
                        ipointer++;
                        if (!program[ipointer]) break;
                        if (program[ipointer] === "[") count++;
                        else if (program[ipointer] === "]") {
                            if (count) count--;
                            else break;
                        }
                    }
                }
                break;
            case ']':
                //Pointer is automatically incremented every iteration, therefore we must decrement to get the correct value
                ipointer = astack.pop() - 1;
                break;
            case undefined: // We have reached the end of the program
                end = true;
                break;
            default: // We ignore any character that are not part of regular Brainfuck syntax
                break;
        }
        ipointer++;
    }

    console.log(output);

    outputConsole.innerHTML = output;
}

function minify() {
    const currentCode = editor.value;
    let output = "";
    const acceptableChars = ["<", ">", "+", "-", ".", ",", "[", "]"];

    for (let i = 0; i < currentCode.length; i++) {
        const char = currentCode[i];
        if (acceptableChars.includes(char)) {
            output += char;
        }
    }

    editor.value = output;
}