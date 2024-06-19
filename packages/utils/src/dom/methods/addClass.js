import hasClass from './hasClass';

export default function addClass(element, className) {
    if (element && className) {
        const fn = (_className) => {
            if (!hasClass(element, _className)) {
                if (element.classList) element.classList.add(_className);
                else element.className += ' ' + _className;
            }
        };

        [className]
            .flat()
            .filter(Boolean)
            .forEach((_classNames) => _classNames.split(' ').forEach(fn));
    }
}
