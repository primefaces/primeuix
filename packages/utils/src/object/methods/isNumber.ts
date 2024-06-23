import isNotEmpty from './isNotEmpty';

export default function isNumber(value: any): boolean {
    return isNotEmpty(value) && !isNaN(value);
}
