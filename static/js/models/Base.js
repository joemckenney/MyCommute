define(
    [
        'jquery',
        'backbone',
        'underscore',
    ], 
    function($, Backbone, _) {
        return Backbone.Router.extend({
            initialize: function(){
                this.model = {};
            }
        });
    }
);
