require(
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
                basview.render();
            }

        });
        var router = new Router();
        Backbone.history.start();
    }
);
