define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Home',
        'views/User'
    ], 
    function($, Backbone, _, HomeView, UserView) {
        return Backbone.Router.extend({
            initialize: function(){
                this.appModel = new Backbone.Model();

                this.appModel.on('change:page', function(){
                    Backbone.history.navigate(this.appModel.get('page'));
                },this);
            },
            routes: {
                '': 'home',
                'user': 'user'
            },
            home: function(page) {
                this.appModel.set('page', '');
                this.homeview = new HomeView({
                    models: {
                        app: this.appModel
                    }
                });
                this.homeview.render();
            },
            user: function() {
                this.appModel.set('page', 'user');
                this.userview = new UserView({
                    models: {
                        app: this.appModel
                    }
                });
                this.userview.render();
            }
        });
    }
);
