define(
    [
        'jquery',
        'backbone',
        'underscore',
        'routers/Base',
        'views/Home'
    ], 
    function($, Backbone, _, BaseRouter, HomeView) {
        return Backbone.Router.extend({
            initialize: function() {
                //views
                this.homeview = new HomeView({ el: $('body')});
                //listeners
                this.model.pageModel.on('change:page', this.page, this);
            },
            page: function() {
                if(this.models.pageModel.get('page') === 'home') 
                    this.homeview.render(); 
            }
        });
    }
);
