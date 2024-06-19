import resolveUserAgent from './resolveUserAgent';

let browser = {};

export default function getBrowser() {
    if (!browser) {
        let matched = resolveUserAgent();

        if (matched.browser) {
            browser[matched.browser] = true;
            browser['version'] = matched.version;
        }

        if (browser['chrome']) {
            browser['webkit'] = true;
        } else if (browser['webkit']) {
            browser['safari'] = true;
        }
    }

    return browser;
}
