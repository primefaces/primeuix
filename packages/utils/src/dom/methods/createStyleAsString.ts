export default function createStyleAsString(css: string, options: any = {}) {
    return css ? `'<style type="text/css" ${Object.entries(options).reduce((s, [k, v]) => s + `${k}="${v}"`, ' ')}>${css}</style>'` : '';
}
