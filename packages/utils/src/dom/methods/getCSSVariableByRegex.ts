export default function getCSSVariableByRegex(variableRegex: RegExp): { name: string | undefined; value: string | undefined } | null {
    for (const sheet of document?.styleSheets) {
        try {
            for (const rule of sheet?.cssRules) {
                if ('style' in rule) {
                    for (const property of (rule as CSSStyleRule).style) {
                        if (variableRegex.test(property)) {
                            return { name: property, value: (rule as CSSStyleRule).style.getPropertyValue(property).trim() };
                        }
                    }
                }
            }
        } catch {}
    }

    return null;
}
