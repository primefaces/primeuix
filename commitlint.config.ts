export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
        'subject-case': [1, 'always', ['sentence-case', 'lower-case']],
        'references-empty': [1, 'never'],
        'header-max-length': [0, 'always']
    },
    parserPreset: {
        parserOpts: {
            issuePrefixes: ['Fixes #', 'Fixed #']
        }
    }
};
