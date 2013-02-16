require(
    [
        'jquery',
        'backbone',
        'underscore'
    ], 
    function($, Backbone, _) {
        return Backbone.Router.extend({
            routes: {
                '': 'root'
            },
            root: function() {
                debugger 
            }

        });
    }
);
