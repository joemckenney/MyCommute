define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/Base'
    ],
    function($, _, Backbone,BaseModel){
        return BaseModel.extend({
            url: '/actransit/etd',
            initialize: function(params) {
                this.fetch({
                    data: { s: params.stop, r: params.route },
                    success: function(model, response, options) {
                        debugger
                        this.routes = response.roots.routes;
                    }.bind(this)
                });    
            }
        })
    }
);
