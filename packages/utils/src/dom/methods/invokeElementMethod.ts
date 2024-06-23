export default function invokeElementMethod(element: Element, methodName: string, args: any): void {
    (element as any)[methodName].apply(element, args);
}
