import toElement from './toElement';

export default function appendChild(element, child) {
    const target = toElement(element);

    if (target) target.appendChild(child);
    else throw new Error('Cannot append ' + child + ' to ' + element);
}
