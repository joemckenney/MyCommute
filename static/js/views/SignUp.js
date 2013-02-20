define(
    [
        'jquery',
        'backbone',
        'underscore',
        'views/Base'
    ], 
    function($, Backbone, _, BaseView, bootstrap) {
        return BaseView.extend({
            initialize: function(){
                BaseView.prototype.initialize.apply(this, arguments);
            },
            render: function(){
                this.$el.html(this.compiledTemplate());
                return this;
            },
            template: '\
                <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
                    <div class="modal-heaer">\
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
                        <h3 id="signup-modal">Sign Up</h3>\
                    </div>\
                    <div class="modal-body">\
                        <a class="btn btn-primary btn-large" href="in/track.php">with Facbook</a>\
                        <a class="btn btn-success btn-large" href="../main/track.php">with Google</a>\
                    </div>\
                </div>\
            '
        });
});












