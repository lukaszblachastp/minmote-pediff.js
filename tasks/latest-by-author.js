module.exports = {
    config: {
        path: '#!/article-by-author/43948',
        media: {
            print: false
        },
        package: 'latest-by-author',
        actions: ['comments-box']
    },
    execute: function(pediff, config) {
        this.waitUntilVisible('.article-data', function() {
            this.wait(2500);
        });

        //this.then(function() {
        //    pediff.screenshot('#wrapper');
        //});
        //
        //this.waitForSelector('.comments-box');

        try {
            this.thenClick('.comments-box');            
        } catch(err) {
            this.echo("Warning: .comments-box not found");
        }

        this.then( function() {
            this.wait(2500, function() {
                pediff.screenshot('#wrapper', config.actions[0]);
            })
        });
    }
};