import findSingle from './findSingle';
import getParents from './getParents';

export default function getScrollableParents(element: Element): Element[] {
    let scrollableParents = [];

    if (element) {
        let parents = getParents(element) as HTMLElement[];
        const overflowRegex = /(auto|scroll)/;

        const overflowCheck = (node: Element) => {
            try {
                let styleDeclaration = window['getComputedStyle'](node, null);

                return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
            } catch (err) {
                return false;
            }
        };

        for (let parent of parents) {
            let scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];

            if (scrollSelectors) {
                let selectors = scrollSelectors.split(',');

                for (let selector of selectors) {
                    let el = findSingle(parent, selector);

                    if (el && overflowCheck(el)) {
                        scrollableParents.push(el);
                    }
                }
            }

            if (parent.nodeType !== 9 && overflowCheck(parent)) {
                scrollableParents.push(parent);
            }
        }
    }

    return scrollableParents;
}
