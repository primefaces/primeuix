import hasClass from './hasClass';

const _addClass = (element, className) => {
    if (element && className && !hasClass(element, className)) {
        if (element.classList) element.classList.add(className);
        else element.className += ' ' + className;
    }
};

export default function addClass(element, className) {
    if (element && className) {
        [className]
            .flat()
            .filter(Boolean)
            .forEach((cns) => cns.split(' ').forEach((cn) => _addClass(element, cn)));
    }
}
