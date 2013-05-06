define(
    [
        'jquery',
        'underscore',
        'backbone'
    ],
    function($, _, Backbone){
        //replace with Base Model
        return Backbone.Model.extend({
            url: '/actransit/etd',
            fetch: function(){
                debugger
                Backbone.Model.prototype.fetch.call(this, {
                    data: { s: this.stop, r: this.route },
                    dataType: 'text',
                    success: function(model, response, options){
                        var xml = $($.parseXML(response));
                        var prediction = xml.find('prediction');
                        var attrs = {
                                minutes: prediction.attr('minutes'),
                                seconds: prediction.attr('seconds'),
                                stopName: xml.find('predictions').attr('stopTitle') 
                            };
                        this.set(attrs);
                        setTimeout(function() { console.log(xml); }, 1000);
                    }.bind(this),
                    error: function(model, response, options){
                        debugger
                        console.log('error');
                    }.bind(this)
                });
            },
            initialize: function(route, stop) {
                this.route = route;
                this.stop = stop;
                this.fetch();
            },
        });
    }
);
