define(
    [
        'jquery',
        'backbone',
        'underscore',
        'bootstrap.modal',
        'views/Base',
        'views/SignUp'
    ], 
    function($, Backbone, _, Bootstrap, BaseView, SignUp) {
        return BaseView.extend({
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
                this.children.signup = new SignUp();
            },
            events: {
                'click .sign-up-btn': function(e) {
                    !this.children.signup.$el.is(':visible') ?
                        this.children.signup.$el.show():
                        this.children.signup.$el.hide();
                    e.preventDefault();
                }
            },
            render: function(){
                debugger
                this.$el.html(this.compiledTemplate());
                this.$el.append(this.children.signup.render().el);
                this.children.signup.$el.hide();
                return this;
            },
            template: '\
                <div class="sign-up">\
                    <a href="#myModal" role="button" data-toggle="modal" class="btn btn-success sign-up-btn">Sign Up</a>\
                </div>\
            '
        });
});



