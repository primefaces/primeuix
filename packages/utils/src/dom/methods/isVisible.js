export default function isVisible(element) {
    return element && element.offsetParent != null;
}
