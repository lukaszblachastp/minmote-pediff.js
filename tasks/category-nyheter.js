module.exports = {
    config: {
        path: '#!/artikler/1221/nyheter',
        media: {
            print: false
        },
        package: 'category-nyheter'
    },
    execute: function(pediff, config) {
        // this.on('remote.message', function(msg) {
        //     this.echo('remote message caught: ' + msg);
        // });

        this.waitForSelector('.articles-data-list li:last-child');

        pediff.screenshot('#wrapper');
    }
};