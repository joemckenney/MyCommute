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
                <div class="span-6" style="float:left";>\
                    <h2>Track Lines</h2>\
                </div>\
                <div class="span-6" style="float:left";>\
                    <h2>Check Times</h2>\
                </div>\
                <div class="sign-up">\
                    <a href="#myModal" role="button" data-toggle="modal" class="btn btn-success sign-up-btn">Sign Up</a>\
                </div>\
            '
        });
});

