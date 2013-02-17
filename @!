define(
    [
        'jquery',
        'backbone',
        'underscore'
    ], 
    function($, Backbone, _) {
        return Backbone.View.extend({
            el: $('#container'),
            initialize: function(){
                Backbone.View.prototype.initialize.apply(this, arguments);
                this.render();
            },
            render: function(){
                this.$el.html(_(this.template).template());
            },
            template: '\
                <div> PAGE2 </div>\
            '
        });
});
