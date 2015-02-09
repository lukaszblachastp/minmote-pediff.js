module.exports = {
    config: {
        path: '#!/videoer/54',
        media: {
            print: false
        },
        package: 'videos-category'
    },
    execute: function(pediff, config) {
        this.waitForSelector('.videos-data-list', function() {
            this.wait(2500);
        });

        this.then(function() {
            pediff.screenshot('#wrapper');
        })

    }
};