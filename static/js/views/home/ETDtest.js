define(
  [
      'jquery',
      'backbone',
      'underscore',
      'views/Base',
      'models/actransit/etd'
  ],
  function($, Backbone, _, BaseView, ACtransitETDModel){
    return BaseView.extend({
      initialize: function(){
        BaseView.prototype.initialize.apply(this,arguments);
        debugger
        this.etd = new ACtransitETDModel({ stop: "1014950", route:"57" })
      },
      render: function(){
        this.$el.html(this.compiledTemplate());
        return this;
      },
      template: ''
    });


  }


  )