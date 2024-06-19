export default function getSelection() {
    if (window.getSelection) return window.getSelection().toString();
    else if (document.getSelection) return document.getSelection().toString();
    else if (document['selection']) return document['selection'].createRange().text;

    return undefined;
}
