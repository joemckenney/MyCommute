require.config({
    baseUrl: './static/js/',
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        'bootstrap.modal': 'lib/bootstrap.modal',
    },
    shim: {
        jquery: {
            exports: "$"
        },
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery']
        }
    }    
});

define([ 'routers/Base' ], 
    function(BaseRouter) {
        var Router = new BaseRouter();
        Router.initialize();
        Backbone.history.start({ pushState: true });
    }
);
