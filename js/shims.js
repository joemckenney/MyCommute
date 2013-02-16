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

define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base'
    ], 
    function($, Backbone, _, BaseView) {
        var Router = Backbone.Router.extend({
            routes: {
                '': 'root'
            },
            root: function() {
                var baseview = new BaseView();
                baseview.render();
            }

        });
        var router = new Router();
        Backbone.history.start();
    }
);
