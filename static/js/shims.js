require.config({
    baseUrl: './static/js/',
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
        $(document).click("a", function(e) { 
            Backbone.history.navigate($(e.target).attr("href"), true);
            e.preventDefault();
        });
        Backbone.history.start({ pushState: true });
    }
);
