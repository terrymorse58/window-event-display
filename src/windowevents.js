// windowevents - report events sent to `document.window`

/**
 *
 * @param {HTMLElement} olEvents - <ol> element to contain results
 * @param {HTMLElement} divEvents - parent of <ol>
 * @constructor
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
    'beforeunload'
  ];
  eventNames.forEach(function (eventName) {
    window.addEventListener(eventName, function (evt) {
      const now = new Date();
      const timeStr = now.getHours().toString().padStart(2,'0') + ':' +
        now.getMinutes().toString().padStart(2,'0') + ':' +
        now.getSeconds().toString().padStart(2,'0') + '.' +
        now.getMilliseconds();
      let li = document.createElement('li');
      li.innerHTML = timeStr + ' - ' + `<code>${evt.type}</code>`;
      olEvents.appendChild(li);

      // scroll to bottom of list
      const bottomOffset = divBottom.offsetTop;
      divEvents.scrollTop = bottomOffset - 10;
    });
  });
}
