module.exports = {
  verbose: true, // indicates whether each test should be reported during the run
  setupFilesAfterEnv: ['jest-enzyme'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/client/src/components/*.{js,jsx}'],
  moduleFileExtensions: ['jsx', 'js'],
  moduleDirectories: ['node_modules'],
  testEnvironment: 'enzyme',

  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },

  testMatch: [
    '**/__tests__/**/*.[js]?(x)',
    '**/?(*.)+(spec|test).[js]?(x)',
  ],

  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
  },
};
