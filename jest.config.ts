export default {
    rootDir: './',
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['<rootDir>/packages/.*/dist'],
    moduleNameMapper: {
        '^@primeuix/(.*)/(.*)$': '<rootDir>/packages/$1/src/$2'
    }
};
