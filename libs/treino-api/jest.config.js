module.exports = {
  name: 'treino-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/treino-api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
