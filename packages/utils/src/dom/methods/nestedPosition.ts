import calculateScrollbarWidth from './calculateScrollbarWidth';
import getHiddenElementOuterWidth from './getHiddenElementOuterWidth';
import getOffset from './getOffset';
import getOuterWidth from './getOuterWidth';
import getViewport from './getViewport';

export default function nestedPosition(element: HTMLElement, level: number): void {
    if (element) {
        const parentItem = element.parentElement;
        const elementOffset = getOffset(parentItem);
        const viewport = getViewport();
        const sublistWidth = element.offsetParent ? element.offsetWidth : getHiddenElementOuterWidth(element);
        const itemOuterWidth = getOuterWidth(parentItem?.children?.[0]);
        let left: string = '';

        if ((elementOffset.left as number) + itemOuterWidth + sublistWidth > viewport.width - calculateScrollbarWidth()) {
            if ((elementOffset.left as number) < sublistWidth) {
                // for too small screens
                if (level % 2 === 1) {
                    left = (elementOffset.left as number) ? '-' + (elementOffset.left as number) + 'px' : '100%';
                } else if (level % 2 === 0) {
                    left = viewport.width - sublistWidth - calculateScrollbarWidth() + 'px';
                }
            } else {
                left = '-100%';
            }
        } else {
            left = '100%';
        }

        element.style.top = '0px';
        element.style.left = left;
    }
}
