define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base'
    ],
    function($, Backbone, _, BaseView){
        return BaseView.extend({
            tagname: 'li',
            initialize:function(opts){
                this.etd = opts.etd;
                this.etd.on('change', this.render, this);
                BaseView.prototype.initialize.apply(this, arguments);
            },
            events: {
            },
            render: function(){
                this.$el.html(this.compiledTemplate());
            },
            template:   '<ul>\
                            <li>Route: <%- this.etd.route %></li>\
                            <li>Stop: <%- this.etd.get("stopName") %></li>\
                            <li>Time to Departure:  <%- this.etd.get("minutes") %>m <%- this.etd.get("seconds") %>s</li>\
                        </ul>'
        });
});