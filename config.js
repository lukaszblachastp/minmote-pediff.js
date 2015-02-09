module.exports = {
    viewports: [
        { width: 1280, height: 1024 },
        { width: 768, height: 1024 },
        { width: 480, height: 320 }
    ],

    environments: {
        current: 'http://www.minmote.no/',
        candidate: 'http://testprod.minmote.no/'
    },

    css: {
        '.search-results .articles-data-list li .element-image-container img': 'height: auto',
        '.articles-list-content .articles-data-list li .element-image-container img': 'height: auto',
        '.share-box .share-count': 'font-size: 0',
        '.advert-horseshoe, .advert-bottom-wrapper': 'display: none'
    },

    pediff: {
        defaultTimeout: 5000,
        // verbose: true,
        screenshotRoot: './img/',

        // Resemble.js settings
        outputSettings: {
            errorColor: { red: 255, green: 0, blue: 255 },
            // flat | movement | flatDifferenceIntensity | movementDifferenceIntensity
            errorType: 'flatDifferenceIntensity',
            transparency: 1,
            largeImageThreshold: 0
        }
    },

    output: {
        junit: true,
        json: true
    }
};
