module.exports = {
    config: {
        path: '#!/artikler//2',
        media: {
            print: false
        },
        package: 'articles-no-category'
    },
    execute: function(pediff, config) {
        this.waitForSelector('.articles-list-content', function() {
            this.wait(2000);
        });

        this.then(function() {
            pediff.screenshot('#wrapper');
        });
    }
};