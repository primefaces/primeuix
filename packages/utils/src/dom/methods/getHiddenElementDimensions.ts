export default function getHiddenElementDimensions(element?: HTMLElement): { width: number; height: number } {
    const dimensions: { width: number; height: number } = { width: 0, height: 0 };

    if (element) {
        const priorVisibility = element.style.visibility;
        const priorDisplay = element.style.display;
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = priorDisplay;
        element.style.visibility = priorVisibility;
    }

    return dimensions;
}
