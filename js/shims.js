require.config({
    baseUrl: '../js/',
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

require(  
    [
        'backbone',
        'routers/Base'
    ], 
    function(Backbone, Base){
        debugger
        var router = new Base();
        Backbone.history.start();
    }
);
