define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base',
        'views/SignUp',
        'models/Bart'
    ], 
    function($, Backbone, _, BaseView, SignUp, BartModel) {
        return BaseView.extend({
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
                this.children.signup = new SignUp();
            },
            events: {
                'click .sign-up-btn': function(e) {
                    bartTest = new BartModel;
                    response = bartTest.fetch();
                    $.when(response).then(function(){},
                        function(){alert(response.responseText);});
                    !this.children.signup.$el.is(':visible') ?
                        this.children.signup.$el.show():
                        this.children.signup.$el.hide();
                    e.preventDefault();
                }
            },
            render: function(){
                this.$el.html(this.compiledTemplate());
                this.$el.append(this.children.signup.render().el);
                this.children.signup.$el.hide();
                return this;
            },
            template: '\
                    <a href="#" role="button" data-target="#myModal" data-toggle="modal" class="btn btn-success sign-up-btn">Sign Up</a>\
            '
        });
});



