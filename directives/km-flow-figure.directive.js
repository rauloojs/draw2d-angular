(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('kmFlowFigure', kmFlowFigure);

    function kmFlowFigure() {
        return {
            scope: {
            	ngModel: '='
            },
            link: function(scope, iElm, iAttrs, controller) {
                iElm.on('dragstart', function(e) {
                    e.dataTransfer.setData('shape', scope.ngModel.class); 
                });
            }
        };
    }
})();