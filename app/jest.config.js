module.exports = {
  preset: 'react-native',
  resetMocks: true,
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleNameMapper: {
    '\\.sass$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js',
  },
};
