define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base'
    ], 
    function($, Backbone, _, BaseView) {
        return BaseView.extend({
            el: $('#container'),
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
            },
            render: function(){
                this.$el.html(_(this.template).template());
            },
            template: '\
                <div> HOMEPAGE </div>\
            '
        });
});
