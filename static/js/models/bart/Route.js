define(
    [
        'jquery',
        'underscore',
        'backbone'
    ],
    function($, _, Backbone){
        //replace with Base Model
        return Backbone.Model.extend({
            //bart system advisory
            url: '/bart/routes'
            initialize: function() {
                
            }
        });
        

    }
);
