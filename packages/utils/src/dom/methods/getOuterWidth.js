export default function getOuterWidth(element, margin) {
    if (element) {
        let width = element.offsetWidth;

        if (margin) {
            let style = getComputedStyle(element);

            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }

        return width;
    }

    return 0;
}
