module.exports = {
    config: {
        path: '#!/sonia-snapshot/656385049397994322',
        media: {
            print: false
        },
        package: 'blog-entry'
    },
    execute: function(pediff, config) {
        this.waitForSelector('.blog-content', function() {
            this.wait(2500);
        });

        this.then(function() {
            pediff.screenshot('#wrapper');
        });
    }
};