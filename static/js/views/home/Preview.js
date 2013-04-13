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
            },
            render: function(){
                this.$el.html(this.compiledTemplate());
                return this;
            },
            template: '\
                <div class="row-fluid">\
                    <div class="span6">\
                        <h2>Track Lines</h2>\
                        <p>Track the lines you take everyday.</p>\
                    </div>\
                    <div class="span6">\
                        <h2>Check Times</h2>\
                        <p>Check to see the status of your tracked lines.</p>\
                    </div>\
                    <div class="sign-up">\
                        <a href="#" class="btn btn-success sign-up-btn">Sign Up</a>\
                    </div>\
                </div>\
            '
        });
});

