# window-event-display

Display events sent to `document.window`
---

![Test of Window Events](media/windowevents-dynamic-400x300.gif)

## Usage

```html

<div id="divEvents">
  <ol id="olEvents" class="text-monospace"></ol>
</div>

<script
  src="https://cdn.jsdelivr.net/npm/window-event-display@1.1.0/src/windowevents.js"></script>
<script>

<script>
  const divEvents = document.getElementById('divEvents');
  const olEvents = document.getElementById('olEvents');
  WindowEvents(olEvents, divEvents);
</script>
```
