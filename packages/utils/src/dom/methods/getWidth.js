export default function getWidth(element) {
    if (element) {
        let width = element.offsetWidth;
        let style = getComputedStyle(element);

        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

        return width;
    }

    return 0;
}
