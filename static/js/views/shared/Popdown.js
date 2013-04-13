define(
    [
        'jquery',
        'underscore',
        'views/Base'
    ],
    function($, _, BaseView) {
        return BaseView.extend({
                attributes: {
                    style: 'display:none'
                },
                initialize: function() {
                    BaseView.prototype.initialize.apply(this, arguments);
                },
                render: function() {
                    this.$el.html(this.compiledTemplate());
                    return this;
                },
                template: '\
                    <ul class="dropdown-menu pull-left" style="padding: 15px" role="menu" aria-labelledby="dLabel">\
                        <form style="margin: 0px;">\
                            <input style="margin-bottom: 15px;" type="text" size="30">\
                            <input style="margin-bottom: 15px;" type="password" size="30">\
                            <input style="float: left; margin-right: 10px;" type="checkbox" value="1">\
                            <label class="string optional" for="user_remember_me"> Remember me</label>\
                            <input class="btn btn-primary btn-block" style="clear: left;" type="submit" name="commit" value="Sign In">\
                        </form>\
                    </ul>\
                '
            }
        );
    }
);
