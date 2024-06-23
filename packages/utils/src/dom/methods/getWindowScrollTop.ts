export default function getWindowScrollTop(): number {
    let doc = document.documentElement;

    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
}
