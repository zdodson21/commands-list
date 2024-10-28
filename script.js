function copyToClipboard(e) {
  console.log("Copying code...");
  const code = e.target.parentElement.querySelector("p");
  if (code) navigator.clipboard.writeText(code.innerText);
  console.log(`Copied "${code.innerText}" to clipboard!`);
}