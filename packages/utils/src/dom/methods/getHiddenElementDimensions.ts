export default function getHiddenElementDimensions(element?: HTMLElement): { width: number; height: number } {
    let dimensions: { width: number; height: number } = { width: 0, height: 0 };

    if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
    }

    return dimensions;
}
