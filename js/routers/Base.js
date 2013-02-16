require(
    [
        'jquery',
        'backbone',
        'underscore'
    ], 
    function($, Backbone, _) {
        return Backbone.Router.extend({
            routes: {
                '': 'page'
            },
            page: function() {
                //instantiate some view 
            }
        });
    }
);
