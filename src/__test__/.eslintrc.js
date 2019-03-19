module.exports = {
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true, // devDependenciesのimportを許可
      optionalDependencies: false,
    }],
  }
};
