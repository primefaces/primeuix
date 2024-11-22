import getScrollLeft from './getScrollLeft';

export default function getWindowScrollLeft(): number {
    let doc = document.documentElement;

    return (window.pageXOffset || getScrollLeft(doc)) - (doc.clientLeft || 0);
}
