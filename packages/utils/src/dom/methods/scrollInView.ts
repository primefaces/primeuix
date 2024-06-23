import getOuterHeight from './getOuterHeight';

export default function scrollInView(container: HTMLElement, item: HTMLElement): void {
    let borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = getOuterHeight(item);

    if (offset < 0) {
        container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
        container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
}
