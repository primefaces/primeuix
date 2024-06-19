import getFocusableElements from './getFocusableElements';

export default function getFirstFocusableElement(element, selector) {
    const focusableElements = getFocusableElements(element, selector);

    return focusableElements.length > 0 ? focusableElements[0] : null;
}
