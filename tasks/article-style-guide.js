module.exports = {
    config: {
        path: '#!/artikkel/23333677',
        media: {
            print: false
        },
        package: 'article-style-guide',
        actions: ['style-guide', 'next-style-guide']
    },
    execute: function(pediff, config) {
        this.waitForSelector('.article-data', function() {
            this.wait(5000);
        });

        this.then(function() {
            pediff.screenshot('#wrapper');
        });

        this.waitForSelector('.article-style-guide-container', function () {
            this.click('.style-guide-grid li:first-child')
        });

        this.waitForSelector('.style-guide-element-details', function() {
            this.wait(1000);
        });

        this.then(function() {
            pediff.screenshot('.style-guide-element-details', config.actions[0]);
        });

        this.waitForSelector('.details-navigation-next', function () {
            this.click('.details-navigation-next');
            this.wait(1000);
        });

        this.then(function () {
            pediff.screenshot('.style-guide-element-details', config.actions[1]);
        });
    }
};