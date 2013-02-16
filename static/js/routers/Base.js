define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base'
    ], 
    function($, Backbone, _, BaseView, BaseRouter) {
        return Backbone.Router.extend({
            routes: {
                '': 'root'
            },
            root: function() {
                var baseview = new BaseView();
            }
        });
    }
);
