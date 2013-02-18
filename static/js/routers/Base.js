define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base',
        'routers/Base',
        'views/Page1',
        'views/Page2'
    ], 
    function($, Backbone, _, BaseView, BaseRouter, Page1View, Page2View) {
        return Backbone.Router.extend({
            routes: {
                '': 'root',
                'foo': 'page1',
                'bar': 'page2'
            },
            root: function() {
                debugger
                var baseview = new BaseView();
            },
            page1: function() {
                var page1view = new Page1View();
            },
            page2: function() {
                debugger
                var page2view = new Page2View();
            }

        });
    }
);
