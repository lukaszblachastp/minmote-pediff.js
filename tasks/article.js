module.exports = {
    config: {
        path: '#!/artikkel/23332927',
        media: {
            print: false
        },
        package: 'article'
    },
    execute: function(pediff, config) {
        this.waitForSelector('.article-data', function() {
            this.wait(2500);
        });

        this.then(function() {
            pediff.screenshot('#wrapper');
        });
    }
};