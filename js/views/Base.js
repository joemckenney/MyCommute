require(
    [
        'jquery',
        'backbone',
        'underscore'
    ], 
    function($, Backbone, _) {
        return Backbone.View.extend({
            initialize: function(){
                Backbone.View.prototype.initialize.apply(this, arguments);
                this.render();
            },
            render: function(){
                var html = _(this.template).template();
                this.$el.append(this.childView.render().el);           
            },
            template: '\
                <div> FOOBART </div>\
            '
        });

    ]);