import { createStyleMarkup, isNotEmpty } from '@primeuix/utils';

export interface StyleSheetProps {
    attrs?: Record<string, unknown>;
}

export interface StyleMeta {
    css?: string;
    attrs?: Record<string, unknown>;
    markup?: string;
    element?: HTMLStyleElement;
}

class StyleSheet {
    _styles: Map<string, StyleMeta>;
    _attrs: Record<string, unknown>;
    constructor({ attrs }: StyleSheetProps = {}) {
        this._styles = new Map();
        this._attrs = attrs || {};
    }
    get(key: string) {
        return this._styles.get(key);
    }
    has(key: string) {
        return this._styles.has(key);
    }
    delete(key: string) {
        this._styles.delete(key);
    }
    clear() {
        this._styles.clear();
    }
    add(key: string, css?: string) {
        if (isNotEmpty(css)) {
            const meta = {
                css,
                attrs: this._attrs,
                markup: createStyleMarkup(css, this._attrs)
            } satisfies StyleMeta;

            this._styles.set(key, {
                ...meta,
                element: this.createStyleElement(meta)
            });
        }
    }
    update() {
        // @todo
    }
    getStyles() {
        return this._styles;
    }
    getAllCSS() {
        return [...this._styles.values()].map((style) => style.css).filter(String);
    }
    getAllMarkup() {
        return [...this._styles.values()].map((style) => style.markup).filter(String);
    }
    getAllElements() {
        return [...this._styles.values()].map((style) => style.element);
    }
    /**
     * Used to create a style element.
     *
     * @param {StyleMeta} meta
     * @returns {HTMLStyleElement | undefined}
     */
    // eslint-disable-next-line
    createStyleElement(meta?: StyleMeta): HTMLStyleElement | undefined {
        return undefined;
    }
}

export default StyleSheet;
