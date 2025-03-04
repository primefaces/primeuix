import toElement, { AngularElement, AngularElementRef, AngularTemplateRef, ReactElement, VueElement } from './toElement';

const domElement = { nodeName: 'domElement', nodeType: 1 } as Element;

describe('angular', () => {
    test('should get element from angular element', () => {
        const element: AngularElement = { el: { nativeElement: domElement } };

        expect(toElement(element)).toBe(domElement);
    });

    test('should get element from angular ElementRef', () => {
        const element: AngularElementRef = { nativeElement: domElement };

        expect(toElement(element)).toBe(domElement);
    });

    test('should get element from angular TemplateRef', () => {
        const element: AngularTemplateRef = { elementRef: { nativeElement: domElement } };

        expect(toElement(element)).toBe(domElement);
    });
});

describe('react', () => {
    test('should get element from react element', () => {
        const element: ReactElement = { current: domElement };

        expect(toElement(element)).toBe(domElement);
    });
});

describe('vue', () => {
    test('should get element from vue element', () => {
        const element: VueElement = { el: domElement };

        expect(toElement(element)).toBe(domElement);
    });
});

test('should return undefined for unsupported elements', () => {
    const element = { abcdefg: domElement };

    expect(toElement(element)).toBe(undefined);
});
