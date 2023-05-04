const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const cleanInput = document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

const copyInput = document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });

export { cleanInput, copyInput };
