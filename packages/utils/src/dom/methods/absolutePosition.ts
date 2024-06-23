import getCSSVariableByRegex from './getCSSVariableByRegex';
import getHiddenElementDimensions from './getHiddenElementDimensions';
import getViewport from './getViewport';
import getWindowScrollLeft from './getWindowScrollLeft';
import getWindowScrollTop from './getWindowScrollTop';

export default function absolutePosition(element: HTMLElement, target: HTMLElement, gutter: boolean = true): void {
    if (element) {
        const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : getHiddenElementDimensions(element);
        const elementOuterHeight = elementDimensions.height;
        const elementOuterWidth = elementDimensions.width;
        const targetOuterHeight = target.offsetHeight;
        const targetOuterWidth = target.offsetWidth;
        const targetOffset = target.getBoundingClientRect();
        const windowScrollTop = getWindowScrollTop();
        const windowScrollLeft = getWindowScrollLeft();
        const viewport = getViewport();
        let top,
            left,
            origin = 'top';

        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            origin = 'bottom';

            if (top < 0) {
                top = windowScrollTop;
            }
        } else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
        }

        if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else left = targetOffset.left + windowScrollLeft;

        element.style.top = top + 'px';
        element.style.left = left + 'px';
        element.style.transformOrigin = origin;
        gutter && (element.style.marginTop = origin === 'bottom' ? `calc(${getCSSVariableByRegex(/-anchor-gutter$/)?.value ?? '2px'} * -1)` : getCSSVariableByRegex(/-anchor-gutter$/)?.value ?? '');
    }
}
