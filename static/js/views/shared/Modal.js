define(
    [
        'jquery',
        'underscore',
        'views/Base'
    ],
    function($, _, BaseView) {
        return BaseView.extend({
                className: 'modal',
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
                    <div class="modal-header">\
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                        <h3></h3>\
                    </div>\
                    <div class="modal-body">\
                    </div>\
                    <div class="modal-footer">\
                    </div>\
                '
            }
        );
    }
);
