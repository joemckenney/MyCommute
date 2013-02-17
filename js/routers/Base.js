define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base',
        'views/Page1',
        'views/Page2'
    ], 
    function($, Backbone, _, BaseView, BaseRouter, Page1Viewm, Page2View) {
        return Backbone.Router.extend({
            routes: {
                '': 'root',
                'foo': 'page1',
                'bar': 'page2'
            },
            root: function() {
                var baseview = new BaseView();
            },
            page1: function() {
                var page1view = new Page1View();
            },
            page2: function() {
                var page2view = new Page2View();
            }

        });
    }
);
