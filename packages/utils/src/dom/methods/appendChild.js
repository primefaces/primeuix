import isElement from './isElement';

export default function appendChild(element, target) {
    if (isElement(target)) target.appendChild(element);
    else if (target.el && target.elElement) target.elElement.appendChild(element);
    else throw new Error('Cannot append ' + target + ' to ' + element);
}
