module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(spec|test).ts?(x)'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/app/$1',
  },
};