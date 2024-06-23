import getFocusableElements from './getFocusableElements';

export default function getFirstFocusableElement(element: Element, selector?: string): Element | undefined {
    const focusableElements = getFocusableElements(element, selector);

    return focusableElements.length > 0 ? focusableElements[0] : undefined;
}
