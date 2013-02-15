require.config({
    baseUrl: './',
    paths: {
        jquery: 'jquery-min',
        underscore: 'underscore',
        backbone: 'backbone-min'
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }    
});


