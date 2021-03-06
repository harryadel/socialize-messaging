/* global Package */
Package.describe({
    name: 'socialize:messaging',
    summary: 'A social messaging package',
    version: '1.2.0',
    git: 'https://github.com/copleykj/socialize-messaging.git',
});

Package.onUse(function _(api) {
    api.versionsFrom('1.3');

    api.use([
        'check',
        'socialize:user-presence@1.0.1',
        'socialize:linkable-model@1.0.3',
        'reywood:publish-composite@1.6.0',
    ]);

    api.mainModule('server.js', 'server');
    api.mainModule('common.js', 'client');
});
