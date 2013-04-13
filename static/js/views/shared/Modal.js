define(
    [
        'jquery',
        'underscore',
        'views/Base'
    ],
    function($, _, Base) {
        return Base.extend({
                className: 'modal',
                attributes: {
                    style: 'display:none'
                },
                initialize: function() {
                    Base.prototype.initialize.apply(this, arguments);
                },
                //if you extend this class and need your own events object then you need to declare it like:
                // $.extend({}, Modal.prototype.events, {
                events: {
                    'show': function(e) {
                        this.trigger("show");
                    },
                    'shown': function(e) {
                        this.shown = true;
                        // check for any text inputs inside the dialog, focus the first one
                        var $textInputs = this.$(TEXT_INPUT_SELECTOR);
                        if($textInputs.length > 0) {
                            $textInputs.first().focus();
                        }
                        this.trigger("shown");
                    },
                    'hide': function(e) {
                        this.trigger("hide");
                    },
                    'hidden': function(e) {
                        this.shown = false;
                        this.trigger("hidden");
                    }
                },
                hide: function() {
                    this.$el.modal('hide');
                },
                show: function() {
                    this.$el.modal('show');
                },
                toggle: function() {
                    this.$el.modal('toggle');
                },
                remove: function() {
                    if (this.shown){
                        this.hide();
                    }
                    Base.prototype.remove.apply(this, arguments);
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
