require.config({
    baseUrl: '../js/',
    paths: {
        jquery: 'lib/jquery-min',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone-min'
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
alert('foo');

require(
    [
        'jquery',
        'backbone',
        'underscore'
    ], 
    function($, Backbone, _) {
        debugger
        var Router = Backbone.Router.extend({
            routes: {
                "": "main"
            },

            main: function(){
                tasks.fetch({
                    success: function(tasks){
                        $("#container").html(view.render().el).show();
                    },
                    error: function(model, error) {
                        alert(error);
                     }
                });
            }
        });
        var router = new Router();
        Backbone.history.start();
    }
);

