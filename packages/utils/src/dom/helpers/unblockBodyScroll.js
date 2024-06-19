import getCSSVariableByRegex from '../methods/getCSSVariableByRegex';
import removeClass from '../methods/removeClass';

export default function unblockBodyScroll(className = 'p-overflow-hidden') {
    const variableData = getCSSVariableByRegex(/-scrollbar-width$/);
    document.body.style.removeProperty(variableData.name);
    removeClass(document.body, className);
}
