export default function minifyCSS(css) {
    return css
        ? css
              .replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')
              .replace(/ {2,}/g, ' ')
              .replace(/ ([{:}]) /g, '$1')
              .replace(/([;,]) /g, '$1')
              .replace(/ !/g, '!')
              .replace(/: /g, ':')
        : css;
}
