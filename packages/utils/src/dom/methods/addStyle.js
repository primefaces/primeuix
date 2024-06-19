export default function addStyle(element, style) {
    if (element) {
        if (typeof style === 'string') {
            element.style.cssText = style;
        } else {
            Object.entries(style || {}).forEach(([key, value]) => (element.style[key] = value));
        }
    }
}
