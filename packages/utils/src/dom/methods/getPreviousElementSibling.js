export default function getPreviousElementSibling(element, selector) {
    let previousElement = element.previousElementSibling;

    while (previousElement) {
        if (previousElement.matches(selector)) {
            return previousElement;
        } else {
            previousElement = previousElement.previousElementSibling;
        }
    }

    return null;
}
