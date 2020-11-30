Package.describe({
  name: 'obonyojimmy:indexdb',
  version: '0.0.1',
  summary: 'Meteor indexDb web-api binding package for offline data storage',
  git: 'https://github.com/obonyojimmy/meteor-indexdb',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  // api.versionsFrom('1.8.1')
  api.use(['ecmascript']);
  api.export('Idb');
  api.mainModule('indexdb.js', 'client');
});

Package.onTest(function (api) {
  api.use('obonyojimmy:indexdb', ['client']);
  api.addFiles('tests.js', 'client');
});