define(
    [
        'jquery',
        'backbone',
        'underscore',
        'routers/Base',
        'views/Home'
    ], 
    function($, Backbone, _, BaseRouter, HomeView) {
        return BaseRouter.extend({
            initialize: function() {
                debugger

                //views
                this.homeview = new HomeView();
                
                //listeners
                this.models.pageModel.on('change:page', this.page, this);
            },
            page: function() {
                if(this.models.pageModel.get('page') === 'home') 
                    this.homeview.render(); 
            }
        });
    }
);
