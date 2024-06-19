export default function hasClass(element, className) {
    if (element) {
        if (element.classList) return element.classList.contains(className);
        else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }

    return false;
}
