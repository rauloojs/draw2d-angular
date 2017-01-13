(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('kmFlowPalette', kmFlowPalette);

    function kmFlowPalette($timeout) {
        return {
            scope: {
            	ngModel: '=?'
            },
            templateUrl: 'directives/km-flow-palette.tmpl.html',
            link: function(scope, iElm, iAttrs, controller) {
            	scope.ngModel = scope.ngModel || [
                    {class:"CustomDraw2d.Start", name:"Start"},
                    {class:"CustomDraw2d.Between", name:"Between"},
                    {class:"CustomDraw2d.End", name:"End"}
                ];
                
                $timeout(function(){
                   $(".draw2d_droppable").draggable({
                       appendTo:"body",
                       stack:"body",
                       zIndex: 27000,
                       helper:"clone",
                       drag: function(event, ui){
                       },
                       stop: function(e, ui){
                       },
                       start: function(e, ui){
                           $(ui.helper).addClass("shadow");
                       }
                  });
               });
            }
        };
    }
})();