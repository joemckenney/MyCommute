define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Home',
        'views/User',
        'models/bart/Route'
    ], 
    function($, Backbone, _, HomeView, UserView, RouteModel) {
        return Backbone.Router.extend({
            initialize: function(){
                this.appModel = new Backbone.Model();
                this.bartRoutes = new RouteModel();
                this.appModel.on('change:page', function(){
                    Backbone.history.navigate(this.appModel.get('page'), true);
                },this);
            },
            routes: {
                '': 'home',
                'user': 'user'
            },
            home: function(page) {
                this.appModel.set('page', '');
                this.homeview = new HomeView({
                    el: $('#container'),
                    models: {
                        app: this.appModel
                    }
                });
                this.homeview.render();
            },
            user: function() {
                this.appModel.set('page', 'user');
                this.userview = new UserView({
                    el: $('#container'),
                    models: {
                        app: this.appModel
                    }
                });
                this.userview.render();
            }
        });
    }
);
