import toElement from './toElement';

export default function appendChild(element: unknown, child: Node) {
    const target: Element | undefined = toElement(element);

    if (target) target.appendChild(child);
    else throw new Error('Cannot append ' + child + ' to ' + element);
}
