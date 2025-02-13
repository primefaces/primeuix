import { $l, $t } from './helpers';

const locales = {
    en: {
        hello: 'Hello',
        info: 'Age {age}, User {user}, Role {role}',
        metadata: {
            page: 'Page {0} of {1}',
            prevPage: 'Previous page'
        }
    },
    es: {
        hello: 'Hola',
        info: 'Edad {age}, Usuario {user}, Rol {role}',
        metadata: {
            page: 'Página {0} de {1}',
            prevPage: 'Página anterior'
        }
    }
};

describe('en', () => {
    test('hello', () => {
        expect($t('hello')).toBe('Hello');
    });

    test('info', () => {
        expect($t('info', { age: 25, user: 'John', role: 'Admin' })).toBe('Age 25, User John, Role Admin');
    });

    test('metadata.page', () => {
        expect($t('metadata.page', 1, 2)).toBe('Page 1 of 2');
        expect($t('metadata.page', [1, 2])).toBe('Page 1 of 2');
        expect($t('metadata.page', { 0: 1, 1: 2 })).toBe('Page 1 of 2');
        expect($t('metadata.page', [1], [2])).toBe('Page 1 of 2');
        expect($t('metadata.page', { 0: 1 }, { 1: 2 })).toBe('Page 1 of 2');
    });

    test('metadata.prevPage', () => {
        expect($t('metadata.prevPage')).toBe('Previous page');
    });
});

describe('helpers', () => {
    $l().define('en', locales.en).use();

    test('define', () => {
        const newLocale = {
            hello: 'Hola',
            info: 'Edad {age}, Usuario {user}, Rol {role}',
            metadata: {
                page: 'Página {0}',
                prevPage: 'Página anterior'
            }
        };

        $l().define('es', newLocale);

        expect($l().locales).toContainEqual(newLocale);
        expect($l().langs).toContain('es');
        expect($t('hello')).toBe('Hello');
    });

    test('update', () => {
        $l().update('en', { hello: 'Hola' });

        expect($t('hello')).toBe('Hola');
    });

    test('use', () => {
        $l({ locales }).use('es');

        expect($t('hello')).toBe('Hola');

        $l().use('en');

        expect($t('hello')).toBe('Hello');
    });
});
