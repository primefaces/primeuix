import addClass from '../methods/addClass';
import calculateBodyScrollbarWidth from '../methods/calculateBodyScrollbarWidth';
import getCSSVariableByRegex from '../methods/getCSSVariableByRegex';

export default function blockBodyScroll(className = 'p-overflow-hidden') {
    const variableData = getCSSVariableByRegex(/-scrollbar-width$/);
    document.body.style.setProperty(variableData.name, calculateBodyScrollbarWidth() + 'px');
    addClass(document.body, className);
}
