define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base',
        'views/shared/Modal',
        'views/home/Preview'
    ], 
    function($, Backbone, _, BaseView, Modal, Preview) {
        return BaseView.extend({
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
                this.children.preview = new Preview();
            },
            events: {
            },
            render: function(){
                this.$el.html(this.compiledTemplate());
                this.$el.append(this.children.preview.render().el);
                return this;
            },
            template: '\
                <div class="jumbo-tron">\
                    <h1>MyCommute</h1>\
                    <p class="lead">We track yo Bay Area transit shit.</p>\
                </div>\
            '
        });
});












