import addStyle from './addStyle';

let calculatedScrollbarWidth = undefined;

export default function calculateScrollbarWidth(element) {
    if (element) {
        let style = getComputedStyle(el);
        return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
    } else {
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
}
