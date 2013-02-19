define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base'
    ], 
    function($, Backbone, _, BaseView) {
        return BaseView.extend({
            //TODO: this needs to go, think about how we handle this
            el: $('#container'),
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
            },
            events: {
                'click a': function(e) {
                    this.models.app.set('page', $(e.target).attr('href'));
                }
            },
            render: function(){
                this.$el.html(this.compiledTemplate());
            },
            template: '\
                <div> HOMEPAGE </div>\
                <a href="/user">Edit User Settings</a>\
            '
        });
});
