export default function getWindowScrollLeft() {
    let doc = document.documentElement;

    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
}
