export default {
    rootDir: './',
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@primeuix/(.*)/(.*)$': '<rootDir>/packages/$1/src/$2'
    }
};
