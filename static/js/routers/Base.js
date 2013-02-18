define(
    [
        'jquery',
        'backbone',
        'underscore',
        'routers/Home'
    ], 
    function($, Backbone, _, HomeRouter) {
        return Backbone.Router.extend({
            routes: {
                ':page': 'page',
            },
            initialize: function() {
                //models
                this.pageModel = new Backbone.Model();
               
                //pages
                this.homepagecontroller = new HomeRouter({
                    models: {
                        pageModel: this.pageModel
                    }
                });
            },
            page: function(page) {
                debugger
                this.pageModel.set('page', page); 
            }
        });
    }
);
