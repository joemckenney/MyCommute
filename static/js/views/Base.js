define(
    [
        'jquery',
        'backbone',
        'underscore'
    ], 
    function($, Backbone, _) {
        return Backbone.View.extend({
            initialize: function(){
                this.children = {};
                
                if(this.options.models){
                    this.models = this.options.models;
                }
                if(this.options.collections){
                    this.collections = this.options.collections;
                }
                if(this.template) {
                    this.compiledTemplate = this.compileTemplate(this.template);
                }
            },
            compileTemplate: _.memoize(function(templateStr) {
                return _.template(templateStr);
            }),
            debouncedRender: function() {
                if (!this._debouncedRender) {
                    this._debouncedRender = _.debounce(this.render, 0);
                }
                this._debouncedRender.apply(this, arguments);
            }
        });
    }
);
