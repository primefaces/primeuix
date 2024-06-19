export default function getNextElementSibling(element, selector) {
    let nextElement = element.nextElementSibling;

    while (nextElement) {
        if (nextElement.matches(selector)) {
            return nextElement;
        } else {
            nextElement = nextElement.nextElementSibling;
        }
    }

    return null;
}
