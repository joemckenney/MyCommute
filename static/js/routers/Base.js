define(
    [
        'jquery',
        'backbone',
        'underscore',
        'collections/bart/Routes',
        'views/home/Master',
        'views/User',
        'models/actransit/etd',
        'views/etd/new'
    ], 
    function($, Backbone, _, RoutesCollection, HomeView, UserView, actransitETD, newETD) {
        return Backbone.Router.extend({
            initialize: function(){
                //models
                this.pageModel = new Backbone.Model; 
               
                //collections
                this.routesCollection = new RoutesCollection();

                this.pageModel.on('change:page', function(){
                    Backbone.history.navigate(this.pageModel.get('page'), true);
                },this);
            },
            routes: {
                '': 'home',
                'user': 'user',
                'etds': 'etds'
            },
            home: function(page) {
                this.pageModel.set('page', '');
                this.homeview = new HomeView({
                    el: $('#container'),
                    models: {
                        page: this.pageModel
                    },
                    collections: {
                        routes: this.routesCollection
                    }
                });
                this.homeview.render();
            },
            user: function() {
                this.pageModel.set('page', 'user');
                this.userview = new UserView({
                    el: $('#container'),
                    models: {
                        page: this.pageModel
                    }
                });
                this.userview.render();
            },
            etds: function(){
                this.pageModel.set('page', 'etds');
                this.etdsview = new newETD({
                    el: $('#container'),
                    models: {
                        page: this.pageModel
                    }
                })
                this.etdsview.render();
            }
        });
    }
);
