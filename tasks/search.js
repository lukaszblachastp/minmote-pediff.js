module.exports = {
    config: {
        path: '#!/soek/aktuelt/nyeste/slik',
        media: {
            print: false
        },
        package: 'search'
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