export default function getWindowScrollTop() {
    let doc = document.documentElement;

    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
}
