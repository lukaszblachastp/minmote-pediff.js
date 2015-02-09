module.exports = {
    config: {
        path: '#!/tv',
        media: {
            print: false
        },
        package: 'tv',
        actions: ['menu-aktuelt']
    },
    execute: function(pediff, config) {
        this.waitUntilVisible('.tv-page', function() {
            this.wait(2500);
        });

        this.then(function() {
            pediff.screenshot('#wrapper');
        });

        this.thenClick('.menu-item-1 a', function() {
            this.wait(2500, function() {
                pediff.screenshot('#wrapper', config.actions[0]);
            });
        });
    }
};