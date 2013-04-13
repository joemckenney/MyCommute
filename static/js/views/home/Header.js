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
            className: 'container',
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
                this.$el.append(this.children.signup.render().el);
                return this;
            },
            template: '\
                <a href="#"role="button" data-target="#myModal" data-toggle="modal" class="nav nav-pills pull-right sign-up-btn">Sign In</a>\
            '
        });
});












