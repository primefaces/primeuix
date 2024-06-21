export default function matchRegex(str, regex) {
    if (regex) {
        const match = regex.test(str);

        regex.lastIndex = 0;

        return match;
    }

    return false;
}
