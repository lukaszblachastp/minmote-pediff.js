module.exports = {
    config: {
        path: '#!/video/58493/slik-finner-du-riktig-hold-in-undertoey',
        media: {
            print: false
        },
        package: 'tv-video',
        actions: ['trendguide-list', 'two-lists']
    },
    execute: function(pediff, config) {
        this.waitForSelector('.video-content', function() {
            this.wait(2500);
        });

        this.then(function() {
            pediff.screenshot('#wrapper');
        });

        this.thenClick('.videos-lists-container.data-container > div:nth-child(3) .togglable-header', function() {
            this.wait(2500, function() {
                pediff.screenshot('#wrapper', config.actions[0]);
            });
        });

        this.thenClick('.videos-lists-container.data-container > div:nth-child(2) .togglable-header', function() {
            this.wait(2500, function() {
                pediff.screenshot('#wrapper', config.actions[1]);
            });
        });


    }
};