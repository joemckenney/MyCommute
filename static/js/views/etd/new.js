define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base',
        'models/actransit/ETD',
        'views/etd'
    ],
    function($, Backbone, _, BaseView, ETD, ETDView){
        return BaseView.extend({
            initialize:function(){
                BaseView.prototype.initialize.apply(this, arguments);
            },
            events: {
                "click #submit": 'create'
            },
            render: function(){
                this.$el.html(this.compiledTemplate());
            },
            create: function(){
                var route = $('#route').val(),
                    stop = $('#stop').val();
                var etd = new ETD(route, stop);
                $('#etd_list').append('<li id="etd' + stop + '" ></li>');
                var etdView = new ETDView({el: $('#etd'+stop), etd: etd});
                etdView.render();
            },
            template: '<p> Try Route "57" and Stop "1014950" and wait 10 seconds</p>\
                       Route: <input type="text" id="route" />\
                       Stop: <input type="text" id="stop" />\
                       <input type="submit" id="submit" value="Add Stop"/>\
                       <ul id="etd_list"></ul>'
        });
});