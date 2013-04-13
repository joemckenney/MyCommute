define(
    [
        'jquery',
        'underscore',
        'backbone'
    ],
    function($, _, Backbone){
        //replace with Base Model
        return Backbone.Model.extend({
            url: '/bart/routes',
            initialize: function() {
                debugger
                this.fetch({
                    success: function(model, reponse, options) {
                        debugger
                    }.bind(this)
                });

            }
        });
        

    }
);
