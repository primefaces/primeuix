import addClass from '../methods/addClass';
import calculateBodyScrollbarWidth from '../methods/calculateBodyScrollbarWidth';
import getCSSVariableByRegex from '../methods/getCSSVariableByRegex';

export default function blockBodyScroll(className: string = 'p-overflow-hidden'): void {
    const variableData = getCSSVariableByRegex(/-scrollbar-width$/);
    variableData?.name && document.body.style.setProperty(variableData.name, calculateBodyScrollbarWidth() + 'px');
    addClass(document.body, className);
}
