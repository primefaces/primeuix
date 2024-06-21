import isVisible from './isVisible';

export default function isHidden(element) {
    return !isVisible(element);
}
