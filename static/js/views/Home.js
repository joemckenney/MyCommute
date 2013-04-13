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
                
                //subviews
                this.children.header = new Header();
                this.children.body   = new Body();
                //this.children.footer = new Footer();
            },
            events: {
                'click .sign-up-btn': function(e) {
                    var bartTest = new BartETDModel();
                    var response = bartTest.fetch();
                    $.when(response).then(
                        function(){},
                        function(response){ debugger });
                    !this.children.signup.$el.is(':visible') ?
                        this.children.signup.$el.show():
                        this.children.signup.$el.hide();
                    e.preventDefault();
                },
                'click .test-ac-etd': function(e) {
                    var acTest = new ACtransitETDModel();
                    var response = acTest.fetch({ data: { s: "1014950", r:"57" } });
                    $.when(response).then(
                        function(){},
                        function(response){ alert(response.responseText);});
                }
            },
            render: function(){
                this.$el.append(this.children.header.render().el);
                this.$el.append(this.children.body.render().el);
                return this;
            }
        });
});



