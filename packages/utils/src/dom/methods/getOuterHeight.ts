export default function getOuterHeight(element: HTMLElement, margin?: boolean): number {
    if (element) {
        let height = element.offsetHeight;

        if (margin) {
            let style = getComputedStyle(element);

            height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }

        return height;
    }

    return 0;
}
