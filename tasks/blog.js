module.exports = {
    config: {
        path: '#!/sonia',
        media: {
            print: false
        },
        package: 'blog'
    },
    execute: function(pediff, config) {
        this.waitUntilVisible('.blog-content', function() {
            this.wait(2500);
        });

        this.then(function() {
            pediff.screenshot('#wrapper');
        });
    }
};