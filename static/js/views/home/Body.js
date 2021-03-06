define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base',
        'views/home/Preview'
    ], 
    function($, Backbone, _, BaseView, Preview) {
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
            className: 'main-container',
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
                this.children.preview = new Preview({
                    models: {
                        page: this.pageModel
                    },
                    collections: {
                        routes: this.routesCollection
                    }
                });
            },
            render: function(){
                this.$el.html(this.compiledTemplate());
                this.$el.append(this.children.preview.render().el);
                return this;
            },
            template: '\
                <div class="jumbo-tron">\
                    <h1>MyCommute</h1>\
                    <p class="lead">We track yo Bay Area transit shit.</p>\
                </div>\
            '
        });
});












