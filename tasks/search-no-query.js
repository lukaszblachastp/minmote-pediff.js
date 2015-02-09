module.exports = {
    config: {
        path: '#!/soek/skjoennhet/nyeste//2',
        media: {
            print: false
        },
        package: 'search-no-query'
    },
    execute: function(pediff, config) {
        this.waitForSelector('.search-results-content', function() {
            this.wait(2500);
        });

        this.then(function() {
            pediff.screenshot('#wrapper');
        });
    }
};