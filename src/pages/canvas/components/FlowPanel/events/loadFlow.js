import { mxGraph, mxClient, mxUtils, mxEvent, mxCompactTreeLayout } from 'mxgraph-js';

export const loadFlow = (refs, setFlowStateCallback) => {
  var container = refs.current[0];
  // Checks if the browser is supported
  if (!mxClient.isBrowserSupported()) {
    // Displays an error message if the browser is not supported.
    mxUtils.error('Browser is not supported!', 200, false);
  } else {
    var graph = new mxGraph(container);

    setFlowStateCallback({ graph });
    // Adds cells to the model in a single step
    graph.getModel().beginUpdate();
    try {
      var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
      var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
      var e1 = graph.insertEdge(parent, null, '', v1, v2);
    } finally {
      // Updates the display
      graph.getModel().endUpdate();
    }

    var parent = graph.getDefaultParent();
  }
};
