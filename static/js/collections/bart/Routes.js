define(
    [
        'jquery',
        'underscore',
        'backbone'
    ],
    function($, _, Backbone){
        //replace with Base Model
        return Backbone.Collection.extend({
            url: '/api.bart.gov/api/routes',
            initialize: function() {
                //testing things out here
                this.fetch({
                    data: { output_mode: 'xml' },
                    dataType: 'text',
                    success: function(collection, response, options) {
                        debugger
                    }.bind(this),
                    error: function(collection, response, options) {
                        debugger
                    }.bind(this)
                });

            },
            xmlToJSON: function(xml) {
                var response = [],
                    document = $.parseXML(xml),
                    $document = $(document),
                    $routes = $document.find('routes route');
                
                $routes.each(function(i, value) {
                    var $value = $(value);
                    response[i] = {
                        'name': $value.find('name').text(),
                        'abbr': $value.find('abbr').text(),
                        'routeID': $value.find('routeID').text(),
                        'number': $value.find('number').text(),
                        'color': $value.find('color').text()
                    };
                });
                return response;
            },
            parse: function(response) {
                return this.xmlToJSON(response);
            }
        });
        

    }
);
