define(
    [
        'jquery',
        'underscore',
        'backbone'
    ],
    function($, _, Backbone){
        //replace with Base Model
        return Backbone.Model.extend({
            url: '/bart/etd',
            initialize: function() {
                
            }
        });
        

    }
);
