let allowClickToCopy = true;
let enableAlerts = true;

/**
 * Handles key press events
 */
function keyPress(e) {
  if (e.key === "Enter") {
    copyToClipboard(e);
  }
}

/**
 * Handles copying commands to clipboard
 */
function copyToClipboard(e) {
  if (allowClickToCopy) {
    console.log("Copying code...");
    const code = e.target.parentElement.querySelector("p");
    if (code) navigator.clipboard.writeText(code.innerText);
    console.log(`Copied "${code.innerText}" to clipboard!`);
  
    if (code.classList.contains("dependency") && enableAlerts) {
      alert("Please ensure you have the proper install tool before running this command!")
    }

    displayCopyNotification();
  }
}

/**
 * Displays the "Copied" notification for 1 second
 */
function displayCopyNotification() {
  const ALERT = document.querySelector(".copy-message");
  ALERT.style.display = "inline-block";
  setTimeout(() => {
    ALERT.style.display = "none";
  }, 1000);
}
