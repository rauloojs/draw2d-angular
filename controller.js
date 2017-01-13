myApp = angular.module('myApp', ['ngMaterial']);


	myApp.controller('EditorController', EditorController);

    function EditorController() {
        var ctrl = this;

        ctrl.click = click;
        
        function click() {
            ctrl.canvasModel = [
              {
                "type": "draw2d.shape.node.Start",
                "id": "354fa3b9-a834-0221-2009-abc2d6bd852a",
                "x": 25,
                "y": 97,
                "width": 50,
                "height": 50,
                "alpha": 1,
                "angle": 0,
                "userData": {},
                "cssClass": "draw2d_shape_node_Start",
                "ports": [
                  {
                    "type": "draw2d.OutputPort",
                    "id": "93b57507-0763-76aa-5cb4-5f92dc43a19c",
                    "width": 10,
                    "height": 10,
                    "alpha": 1,
                    "angle": 0,
                    "userData": {},
                    "cssClass": "draw2d_OutputPort",
                    "bgColor": "#4F6870",
                    "color": "#1B1B1B",
                    "stroke": 1,
                    "dasharray": null,
                    "maxFanOut": 9007199254740991,
                    "name": "output0",
                    "port": "draw2d.OutputPort",
                    "locator": "draw2d.layout.locator.TopLocator"
                  }
                ],
                "bgColor": "#4D90FE",
                "color": "#000000",
                "stroke": 1,
                "radius": 2,
                "dasharray": null
              },
              {
                "type": "draw2d.shape.node.End",
                "id": "ebfb35bb-5767-8155-c804-14bda7759dc2",
                "x": 272,
                "y": 45,
                "width": 50,
                "height": 50,
                "alpha": 1,
                "angle": 0,
                "userData": {},
                "cssClass": "draw2d_shape_node_End",
                "ports": [
                  {
                    "type": "draw2d.InputPort",
                    "id": "28bf52cc-830d-5d1c-f8e2-b0ce98d15159",
                    "width": 10,
                    "height": 10,
                    "alpha": 1,
                    "angle": 0,
                    "userData": {},
                    "cssClass": "draw2d_InputPort",
                    "bgColor": "#4F6870",
                    "color": "#1B1B1B",
                    "stroke": 1,
                    "dasharray": null,
                    "maxFanOut": 9007199254740991,
                    "name": "input0",
                    "port": "draw2d.InputPort",
                    "locator": "draw2d.layout.locator.BottomLocator"
                  }
                ],
                "bgColor": "#4D90FE",
                "color": "#000000",
                "stroke": 1,
                "radius": 2,
                "dasharray": null
              },
              {
                "type": "draw2d.Connection",
                "id": "74ce9e7e-5f0e-8642-6bec-4ff9c54b3f0a",
                "alpha": 1,
                "angle": 0,
                "userData": {},
                "cssClass": "draw2d_Connection",
                "stroke": 2,
                "color": "#129CE4",
                "outlineStroke": 0,
                "outlineColor": "none",
                "policy": "draw2d.policy.line.VertexSelectionFeedbackPolicy",
                "vertex": [
                  {
                    "x": 75,
                    "y": 122
                  },
                  {
                    "x": 272,
                    "y": 70
                  }
                ],
                "router": "draw2d.layout.connection.VertexRouter",
                "radius": 3,
                "source": {
                  "node": "354fa3b9-a834-0221-2009-abc2d6bd852a",
                  "port": "output0"
                },
                "target": {
                  "node": "ebfb35bb-5767-8155-c804-14bda7759dc2",
                  "port": "input0"
                }
              }
            ];
        }
    }
