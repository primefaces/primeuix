import toElement from './toElement';

export default function removeChild(element, child) {
    const target = toElement(element);

    if (target) target.removeChild(child);
    else throw new Error('Cannot remove ' + child + ' from ' + element);
}
