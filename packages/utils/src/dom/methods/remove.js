export default function remove(element) {
    if (element) {
        if (!('remove' in Element.prototype)) element.parentNode?.removeChild(element);
        else element.remove();
    }
}
