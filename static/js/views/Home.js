define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base',
        'views/home/Header',
        'views/home/Body',
        'models/bart/etd',
        'models/actransit/etd',
        'view/home/ETDtest'
    ], 
    function($, Backbone, _, BaseView, Header, Body, BartETDModel, ACtransitETDModel, ETDview) {
        return BaseView.extend({
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
                debugger
                this.children.header = new Header();
                this.children.body   = new Body();
                this.children.etd = new ETDview();
            },
            render: function(){
                this.$el.append(this.children.header.render().el);
                this.$el.append(this.children.body.render().el);
                this.$el.append(this.children.etd.render().el);
                return this;
            }
        });
});



