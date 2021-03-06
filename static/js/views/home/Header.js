define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base',
        'views/shared/Popdown'
    ], 
    function($, Backbone, _, BaseView, Popdown) {
        return BaseView.extend({
            className: 'container',
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
                this.children.signup = new Popdown();
            },
            events: {
                'click .sign-in': function(e) {
                    this.children.signup.$el.show();
                }
            },
            render: function(){
                this.$el.html(this.compiledTemplate());
                this.$('.sign-in').append(this.children.signup.render().el);
                return this;
            },
            template: '\
                <ul class="nav nav-pills pull-right">\
                    <li class="dropdown open" id="menu1">\
                        <a class="dropdown-toggle sign-in pull-right" data-toggle="dropdown" href="#menu1">Sign In</a>\
                    </li>\
                </ul>\
            '
        });
});












