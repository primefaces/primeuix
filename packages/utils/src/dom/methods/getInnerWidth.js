export default function getInnerWidth(element) {
    if (element) {
        let width = element.offsetWidth;
        let style = getComputedStyle(element);

        width -= parseFloat(style.borderLeft) + parseFloat(style.borderRight);

        return width;
    }

    return 0;
}
