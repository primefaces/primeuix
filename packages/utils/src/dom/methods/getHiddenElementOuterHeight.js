export default function getHiddenElementOuterHeight(element) {
    if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        let elementHeight = element.offsetHeight;

        element.style.display = 'none';
        element.style.visibility = 'visible';

        return elementHeight;
    }

    return 0;
}
