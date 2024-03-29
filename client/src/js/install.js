const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();

  // log
  console.log("Fire");
  console.log("event fied" + event);

  window.deferredPrompt = event;

  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const event = window.deferredPrompt;

  // check
  // console.log(event)

  if (!event) {
    return;
  }

  // show
  event.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("Jate Installed");
  window.deferredPrompt = null;
});
