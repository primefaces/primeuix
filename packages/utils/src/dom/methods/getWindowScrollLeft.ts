export default function getWindowScrollLeft(): number {
    let doc = document.documentElement;

    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
}
