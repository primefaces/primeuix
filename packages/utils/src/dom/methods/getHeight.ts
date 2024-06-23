export default function getHeight(element: HTMLElement): number {
    if (element) {
        let height = element.offsetHeight;
        let style = getComputedStyle(element);

        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

        return height;
    }

    return 0;
}
