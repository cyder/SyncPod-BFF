module.exports = {
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(ts)$': '<rootDir>/node_modules/ts-jest', // TypeScriptファイルをテストする場合
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
