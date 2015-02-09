module.exports = {
    config: {
        path: '#!/',
        media: {
            print: false
        },
        package: 'homepage',
        actions: ['menu-item-2', 'menu-mobile-show', 'go-for-more']
    },
    execute: function(pediff, config) {
        var mouse = this.mouse;

        this.waitForSelector('.main-page-primary-content');
        pediff.screenshot('#wrapper');

        // Show 'mote' menu
        this.then(function() {
            mouse.move('.menu-item-2');
            mouse.click('.menu-item-2 a');
            mouse.move(0,0);
        });
        pediff.screenshot('#wrapper', config.actions[0]);

        this.then(function() {
            mouse.click('.menu-show-icon');
        });
        pediff.screenshot('#nav', config.actions[1]);

        this.then(function() {
            mouse.click('[data-menu="menu-item-2"]')
        });
        pediff.screenshot('#wrapper', config.actions[2]);
    }
};