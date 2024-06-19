const _removeClass = (element, className) => {
    if (element && className) {
        if (element.classList) element.classList.remove(className);
        else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

export default function removeClass(element, className) {
    if (element && className) {
        [className]
            .flat()
            .filter(Boolean)
            .forEach((cns) => cns.split(' ').forEach((cn) => _removeClass(element, cn)));
    }
}
