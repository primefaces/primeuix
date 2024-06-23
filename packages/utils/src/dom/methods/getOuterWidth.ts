export default function getOuterWidth(element: unknown, margin?: boolean): number {
    if (element instanceof HTMLElement) {
        let width = element.offsetWidth;

        if (margin) {
            let style = getComputedStyle(element);

            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }

        return width;
    }

    return 0;
}
