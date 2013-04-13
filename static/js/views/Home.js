define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base',
        'views/home/Header',
        'views/home/Body',
        'models/bart/etd',
        'models/actransit/etd'
    ], 
    function($, Backbone, _, BaseView, Header, Body, BartETDModel, ACtransitETDModel) {
        return BaseView.extend({
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
                this.children.header = new Header();
                this.children.body   = new Body();
            },
            render: function(){
                this.$el.append(this.children.header.render().el);
                this.$el.append(this.children.body.render().el);
                return this;
            }
        });
});



