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
                debugger
                this.render();
            },
            render: function(){
                var html = _(this.template).template();
                this.$el.html(html);
            },
            template: '\
                <div> FOOBART </div>\
            '
        });
});
