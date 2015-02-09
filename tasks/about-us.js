module.exports = {
    config: {
        path: '#!/om-oss',
        media: {
            print: false
        },
        package: 'about-us'
    },
    execute: function(pediff, config) {
        this.waitUntilVisible('.about-us', function() {
            this.wait(2500);
        });

        this.then(function() {
            pediff.screenshot('#wrapper');
        });
    }
};