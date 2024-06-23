export default function getHiddenElementOuterWidth(element: HTMLElement): number {
    if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        let elementWidth = element.offsetWidth;

        element.style.display = 'none';
        element.style.visibility = 'visible';

        return elementWidth;
    }

    return 0;
}
