'use strict'

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');

installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstalPromptEvent);

function saveBeforeInstalPromptEvent(evt){
    deferredInstallPrompt.prompt();
  // Hide the install button, it can't be called twice.
  evt.srcElement.setAttribute('hidden', true);
  // CODELAB: Log user response to prompt.
  deferredInstallPrompt.userChoice
      .then((choice) => {
        if (choice.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt', choice);
        } else {
          console.log('User dismissed the A2HS prompt', choice);
        }
        deferredInstallPrompt = null;
      });
}

// CODELAB: Add event listener for appinstalled event
window.addEventListener('appinstalled', logAppInstalled);

/**
 * Event handler for appinstalled event.
 *   Log the installation to analytics or save the event somehow.
 *
 * @param {Event} evt
 */
function logAppInstalled(evt) {
  // CODELAB: Add code to log the event
  console.log('Weather App was installed.', evt);

}
