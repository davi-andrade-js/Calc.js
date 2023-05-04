const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const equal = document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

export { equal, calculate };
