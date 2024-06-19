export default function focus(element, options) {
    element && document.activeElement !== element && element.focus(options);
}
