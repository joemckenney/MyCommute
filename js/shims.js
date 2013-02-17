require.config({
    baseUrl: './js/',
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone'
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
        }
    }    
});

define([ 'routers/Base' ], 
    function(BaseRouter) {
        var Router = new BaseRouter();
        Backbone.history.start();
    }
);
