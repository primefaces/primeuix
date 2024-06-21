import isNotEmpty from './isNotEmpty';

export default function isNumber(value) {
    return isNotEmpty(value) && !isNaN(value);
}
