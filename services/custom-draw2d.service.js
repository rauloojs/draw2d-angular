(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('CustomDraw2d', CustomDraw2d);
    
    function CustomDraw2d() {
        var svc = this;
        
        svc.Start = draw2d.shape.basic.Rectangle.extend({

            NAME : 'CustomDraw2d.Start',
            /*
             * @constructor
             * 
             * @param {Object} [attr] the configuration of the shape
             */
            init: function(attr, setter, getter)
            {
                this._super($.extend({
                    width:100,
                    height:50,
                    cssClass: 'custom-node',
                    userData: {name:'hello'},
                }, attr), setter, getter);

                this.createPort('output', new draw2d.layout.locator.BottomLocator());
            }
        });

        svc.Between = draw2d.shape.basic.Rectangle.extend({

            NAME : 'CustomDraw2d.Between',
            /*
             * @constructor
             * 
             * @param {Object} [attr] the configuration of the shape
             */
            init: function(attr, setter, getter)
            {
                this._super($.extend({
                    width:100,
                    height:50,
                    cssClass: 'custom-node'
                }, attr), setter, getter);

                this.createPort('input', new draw2d.layout.locator.TopLocator());
                this.createPort('output', new draw2d.layout.locator.BottomLocator());
            }
        });

        svc.End = draw2d.shape.basic.Rectangle.extend({

            NAME : 'CustomDraw2d.End',
            /*
             * @constructor
             * 
             * @param {Object} [attr] the configuration of the shape
             */
            init: function(attr, setter, getter)
            {
                this._super($.extend({
                    width:100,
                    height:50,
                    cssClass: 'custom-node'
                }, attr), setter, getter);

                this.createPort('input', new draw2d.layout.locator.TopLocator());
            }
        });

        return svc;
    }
})();