define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base',
        'views/shared/Modal'
    ], 
    function($, Backbone, _, BaseView, Modal) {
        return BaseView.extend({
            className: 'jumbo-tron',
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
                this.children.signup = new Modal();
            },
            events: {
                'click .sign-up-btn': function(e) {
                    this.children.signup.$el.show();
                }
            },
            render: function(){
                this.$el.html(this.compiledTemplate());
                return this;
            },
            template: '\
                <div class="jumbotron" style="padding-top:40px; padding-right:0; text-align: center;background: #dceaf4;margin-bottom: 10px;">\
                    <h1 style="font-size=100px; line-height=1;">MyCommute</h1>\
                    <p class="lead" style="font-size=24px; line-height=1.25;">We track yo Bay Area transit shit.</p>\
                </div>\
            '
        });
});












