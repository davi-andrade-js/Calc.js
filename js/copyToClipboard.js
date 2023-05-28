export default function copyToClipboard(ev) {
  const button = ev.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("success");
    navigator.clipboard.writeText(document.querySelector("#result").value);
    setTimeout(() => {
      button.innerText = "Copy";
      button.classList.remove("success");
    }, 1500);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
}
