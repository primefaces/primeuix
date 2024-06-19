import isNotEmpty from './isNotEmpty';

export default function isPrintableCharacter(char = '') {
    return isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
}
