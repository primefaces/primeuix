import calculateScrollbarWidth from './calculateScrollbarWidth';
import getHiddenElementOuterWidth from './getHiddenElementOuterWidth';
import getOffset from './getOffset';
import getOuterWidth from './getOuterWidth';
import getViewport from './getViewport';

export default function nestedPosition(element, level) {
    if (element) {
        const parentItem = element.parentElement;
        const elementOffset = getOffset(parentItem);
        const viewport = getViewport();
        const sublistWidth = element.offsetParent ? element.offsetWidth : getHiddenElementOuterWidth(element);
        const itemOuterWidth = getOuterWidth(parentItem.children[0]);
        let left;

        if (parseInt(elementOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - calculateScrollbarWidth()) {
            if (parseInt(elementOffset.left, 10) < sublistWidth) {
                // for too small screens
                if (level % 2 === 1) {
                    left = parseInt(elementOffset.left, 10) ? '-' + parseInt(elementOffset.left, 10) + 'px' : '100%';
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
