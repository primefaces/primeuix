import type { Config } from 'jest';
import { defaults } from 'jest-config';

export default {
    rootDir: './',
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['<rootDir>/packages/.*/dist', '<rootDir>/submodules/.*'],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    moduleNameMapper: {
        '^@primeuix/(.*)/(.*)$': '<rootDir>/packages/$1/src/$2'
    }
} satisfies Config;
