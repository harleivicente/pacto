module.exports = {
  name: 'adm-core-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/adm-core-api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
