import '@blockquote-web-components/blockquote-base-embedded-webview/blockquote-base-embedded-webview.js';
import './xstate-counter.js';

// The public events the machine emits, dispatched on the element (`dispatchEmitted`).
// They do not bubble (`{composed: true}`), so the document listens in the capture phase.
for (const type of ['counterchange', 'disabledchange']) {
  document.addEventListener(type, (ev) => console.info(type, ev.detail), {capture: true});
}
