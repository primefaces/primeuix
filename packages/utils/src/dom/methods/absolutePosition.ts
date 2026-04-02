import getCSSVariableByRegex from './getCSSVariableByRegex';
import getHiddenElementDimensions from './getHiddenElementDimensions';
import getViewport from './getViewport';
import getWindowScrollLeft from './getWindowScrollLeft';
import getWindowScrollTop from './getWindowScrollTop';
import isRTL from './isRTL';

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

        const targetTopInPage = targetOffset.top + windowScrollTop;
        const targetLeftInPage = targetOffset.left + windowScrollLeft;

        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetTopInPage - elementOuterHeight;
            origin = 'bottom';

            if (top < 0) {
                top = windowScrollTop;
            }
        } else {
            top = targetOuterHeight + targetTopInPage;
        }

        if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetLeftInPage + targetOuterWidth - elementOuterWidth);
        else left = targetLeftInPage;

        const offsetParent = element.offsetParent as HTMLElement | null;

        if (offsetParent && offsetParent !== document.body && offsetParent !== document.documentElement) {
            const parentOffset = offsetParent.getBoundingClientRect();
            const parentTopInPage = parentOffset.top + windowScrollTop;
            const parentLeftInPage = parentOffset.left + windowScrollLeft;

            top = top - parentTopInPage + offsetParent.scrollTop;
            left = left - parentLeftInPage + offsetParent.scrollLeft;
        }

        if (isRTL(element)) {
            element.style.insetInlineEnd = left + 'px';
        } else {
            element.style.insetInlineStart = left + 'px';
        }

        element.style.top = top + 'px';
        element.style.transformOrigin = origin;
        if (gutter) element.style.marginTop = origin === 'bottom' ? `calc(${getCSSVariableByRegex(/-anchor-gutter$/)?.value ?? '2px'} * -1)` : (getCSSVariableByRegex(/-anchor-gutter$/)?.value ?? '');
    }
}
