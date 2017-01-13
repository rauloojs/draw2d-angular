(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('kmFlowCanvas', kmFlowCanvas);

    function kmFlowCanvas($timeout, CustomDraw2d) {
        return {
            scope: {
                ngModel: '=',
                config: '=?'
            },
            link: function(scope, iElm, iAttrs, controller) {

                scope.editor = {};
                var canvasConf = scope.config || {
                    width : 1000,
                    height: 1000,
                    onDrop: function(droppedDomNode, x, y, shiftKey, ctrlKey){
                        debugger;
                        console.log('dropped');
                        var type = droppedDomNode[0].dataset['shape'];
                        var figure = eval("new "+type+"();");
                        // create a command for the undo/redo support
                        var command = new draw2d.command.CommandAdd(this, figure, x, y);
                        this.getCommandStack().execute(command);
                        canvasToJSON(canvas);
                    }
                };
                
                var selection = {
                    className: null,
                    figure: null,
                    attr: null
                };
                
                var state = {
                    dirty  : false,
                    canUndo: false,
                    canRedo: false
                };

                var canvas = new draw2d.Canvas(iElm.attr("id"), canvasConf.width, canvasConf.height);
                canvas.setScrollArea("#"+iElm.attr("id"));
                canvas.onDrop = canvasConf.onDrop;
                
               // update the scope model with the current state of the
               // CommandStack
               var stack = canvas.getCommandStack();
               stack.addEventListener(function(event){
                   $timeout(function(){
                       state.canUndo = stack.canUndo();
                       state.canRedo = stack.canRedo();
                   });
               });
                    // Update the selection in the model
    	           // and Databinding Draw2D -> Angular
    	           var changeCallback = function(emitter, attribute){
    	        	   $timeout(function(){
    	        		   if(selection.attr!==null){
    	        			   selection.attr[attribute] = emitter.attr(attribute);
    	        		   }
    	               });
    	           };
               canvas.on('select', function(canvas, event){
                   var figure = event.figure;
                   if(figure instanceof draw2d.Connection){
                       return; // silently
                   }

                   $timeout(function(){
                       if(figure!==null){
                           selection.className = figure.NAME;
                           selection.attr = figure.attr();
                       }
                       else {
                           selection.className = null;
                           selection.attr = null;
                       }

                       // unregister and register the attr listener to the new figure
                       //
                       if(selection.figure!==null){selection.figure.off("change",changeCallback);}
                       selection.figure = figure;
                       if(selection.figure!==null){selection.figure.on("change",changeCallback);}
                   });
               });
                
                   scope.$watchCollection("selection.attr", function(newValues, oldValues){
    	        	   
    	               if(oldValues !== null && selection.figure !== null){
    	            	   // for performance reason we post only changed attributes to the draw2d figure
    	            	   //
    	            	   var changes = draw2d.util.JSON.diff(newValues, oldValues);
   	            		   selection.figure.attr(changes); 
    	               }
    	           });
                
                    // push the canvas function to the scope for ng-action access
	               //
    	           scope.editor.undo = $.proxy(stack.undo,stack);
    	           scope.editor.redo = $.proxy(stack.redo,stack);
    	           scope.editor["delete"] = $.proxy(function(){
    	   			  var node = this.getCurrentSelection();
    				  var command = new draw2d.command.CommandDelete(node);
    				  this.getCommandStack().execute(command);
    	           }, canvas);
                

                scope.$watch(function () {
                    return scope.ngModel;
                }, function () {
                    if (scope.ngModel && !scope.preventWatch) {
                        loadJSON(scope.ngModel);
                        scope.preventWatch = false;
                    }
                });

                function loadJSON(json) {
                    canvas.clear();
                    var reader = new draw2d.io.json.Reader();
                    reader.unmarshal(canvas, json);
                }
                
                function canvasToJSON(canvas) {
                     var writer = new draw2d.io.json.Writer();
                     writer.marshal(canvas, function(json){
                         scope.preventWatch = true;
                         scope.ngModel = json;
                     });
                }
            }
        };
    }
})();