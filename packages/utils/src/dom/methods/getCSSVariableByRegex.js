export default function getCSSVariableByRegex(variableRegex) {
    for (const sheet of document?.styleSheets) {
        try {
            for (const rule of sheet?.cssRules) {
                for (const property of rule?.style) {
                    if (variableRegex.test(property)) {
                        return { name: property, value: rule.style.getPropertyValue(property).trim() };
                    }
                }
            }
        } catch {}
    }
    return undefined;
}
