define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base',
        'views/home/Header',
        'views/home/Body'
    ], 
    function($, Backbone, _, BaseView, Header, Body, BartETDModel, ACtransitETDModel) {
        return BaseView.extend({
            /* 
             * @param {Object} options: {
             *     models: {
             *         page: <Backbone.Model>
             *     },
             *     collections: {
             *         routes: <collectiones.bart.Routes>
             *     }
             * }
             */
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
                this.children.header = new Header();
                this.children.body   = new Body({
                    models: {
                        page: this.pageModel
                    },
                    collections: {
                        routes: this.routesCollection
                    }
                });
            },
            render: function(){
                this.$el.append(this.children.header.render().el);
                this.$el.append(this.children.body.render().el);
                return this;
            }
        });
});

