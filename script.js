let allowClickToCopy = true;
let enableAlerts = true;

function copyToClipboard(e) {
  if (allowClickToCopy) {
    console.log("Copying code...");
    const code = e.target.parentElement.querySelector("p");
    if (code) navigator.clipboard.writeText(code.innerText);
    console.log(`Copied "${code.innerText}" to clipboard!`);
  
    if (code.classList.contains("dependency") && enableAlerts) {
      alert("Please ensure you have the proper install tool before running this command!")
    }
  }
}