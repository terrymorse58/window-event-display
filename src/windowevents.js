// windowevents - report events sent to `document.window`

/**
 *
 * @param {HTMLElement} olEvents - <ol> element to contain results
 * @param {HTMLElement} divEvents - parent of <ol>
 */
function WindowEvents (olEvents, divEvents) {
  const eventNames = [
    'load',
    'focus',
    'blur',
    'change',
    'close',
    'error',
    'haschange',
    'message',
    'offline',
    'online',
    'pagehide',
    'pageshow',
    'popstate',
    'resize',
    'submit',
    'unload',
    'beforeunload',
    'languagechange',
    'orientationchange',
    'devicemotion',
    'deviceorientation',
    'storage',
    'animationcancel',
    'animationend',
    'animationiteration',
    'animationstart',
    'copy',
    'cut',
    'paste',
    'gamepadconnected',
    'gamepadisconnected',
    'hashchange',
    'DOMContentLoaded',
    'appinstalled',
    'beforeinstallprompt',
    'message',
    'messageerror',
    'beforeprint',
    'afterprint',
    'transitioncancel',
    'transitionend',
    'transitionrun',
    'transitionstart'
  ];

  function logEvent (evt) {
    console.log('window event:', evt);
    if (evt.target !== document && evt.target !== window) {return;}

    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' +
      now.getMinutes().toString().padStart(2, '0') + ':' +
      now.getSeconds().toString().padStart(2, '0') + '.' +
      now.getMilliseconds();
    let li = document.createElement('li');
    li.innerHTML = timeStr + ' - ' + `<code>${evt.type}</code>`;
    olEvents.appendChild(li);

    // scroll to bottom of list
    const bottomOffset = divBottom.offsetTop;
    divEvents.scrollTop = bottomOffset - 10;
  }


  eventNames.forEach(function (eventName) {
    window.addEventListener(eventName, logEvent);
  });
}
