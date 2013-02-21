define(
    [
        'jquery',
        'backbone',
        'underscore'
    ], 
    function($, Backbone, _){
      return Backbone.Model.extend({
          url: '/bart'
      });
  });