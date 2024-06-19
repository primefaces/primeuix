export default function removeClass(element, className) {
    if (element && className) {
        const fn = (_className) => {
            if (element.classList) element.classList.remove(_className);
            else element.className = element.className.replace(new RegExp('(^|\\b)' + _className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        };

        [className]
            .flat()
            .filter(Boolean)
            .forEach((_classNames) => _classNames.split(' ').forEach(fn));
    }
}
