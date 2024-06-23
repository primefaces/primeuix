import getCSSVariableByRegex from '../methods/getCSSVariableByRegex';
import removeClass from '../methods/removeClass';

export default function unblockBodyScroll(className: string = 'p-overflow-hidden'): void {
    const variableData = getCSSVariableByRegex(/-scrollbar-width$/);
    variableData?.name && document.body.style.removeProperty(variableData.name);
    removeClass(document.body, className);
}
