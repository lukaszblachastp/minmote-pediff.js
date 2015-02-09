module.exports = {
    config: {
        path: '#!/artikler/1225/tilbehoer',
        media: {
            print: false
        },
        package: 'category-tilbehoer',
        actions: ['click-for-more', 'go-my-unicorn-gunicorn']
    },
    execute: function(pediff, config) {
        // this.on('remote.message', function(msg) {
        //     this.echo('remote message caught: ' + msg);
        // });

        this.waitForSelector('.articles-data-list li:last-child');
        pediff.screenshot('#wrapper');

        this.thenClick('.next-elements-button');
        pediff.screenshot('#wrapper', config.actions[0]);

        this.thenClick('.articles-data-list li:last-child a');
        pediff.screenshot('#wrapper', config.actions[1]);
    }
};