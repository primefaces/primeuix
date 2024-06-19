import addStyle from './addStyle';

let calculatedScrollbarWidth = undefined;

export default function calculateScrollbarWidth() {
    if (calculatedScrollbarWidth != null) return calculatedScrollbarWidth;

    let scrollDiv = document.createElement('div');

    addStyle(scrollDiv, {
        width: '100px',
        height: '100px',
        overflow: 'scroll',
        position: 'absolute',
        top: '-9999px'
    });
    document.body.appendChild(scrollDiv);

    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    document.body.removeChild(scrollDiv);

    calculatedScrollbarWidth = scrollbarWidth;

    return scrollbarWidth;
}
