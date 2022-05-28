module.exports = {
  name: 'adm-contratos-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/adm-contratos-api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
