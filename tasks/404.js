module.exports = {
    config: {
        path: '#!/page404',
        media: {
            print: false
        },
        package: 'page404'
    },
    execute: function(pediff, config) {
        this.waitForSelector('.page404-articles-content', function() {
            this.wait(2500);
        });

        this.then(function() {
            pediff.screenshot('#wrapper');
        });
    }
};
