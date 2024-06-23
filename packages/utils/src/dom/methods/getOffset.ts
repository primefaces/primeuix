export default function getOffset(element?: Element | null): { top: number | string; left: number | string } {
    if (element) {
        let rect = element.getBoundingClientRect();

        return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
        };
    }

    return {
        top: 'auto',
        left: 'auto'
    };
}
