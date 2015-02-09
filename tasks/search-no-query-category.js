module.exports = {
    config: {
        path: '#!/soek/nyeste',
        media: {
            print: false
        },
        package: 'search-no-query-category'
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