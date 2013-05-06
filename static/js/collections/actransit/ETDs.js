define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/actransit/ETD'
    ],
    function($, _, Backbone, actransitETD){
        return Backbone.Collection.extend({
            model: actransitETD
        });
    }
);