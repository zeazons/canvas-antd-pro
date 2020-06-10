import {
  mxGraph,
  mxClient,
  mxUtils,
  mxEditor,
  mxParallelEdgeLayout,
  mxLayoutManager,
  mxGeometry,
  mxKeyHandler,
  mxDefaultKeyHandler,
  mxOutline,
  mxElbowEdgeHandler,
  mxPoint,
  mxEvent,
} from 'mxgraph-js';

import { initialGraphProperties, convertValueToString, createPopupMenu } from '../utils/flowUtiles';

import KeyHandler from '../assets/KeyHandler.txt';

export const initailFlow = (ref, extraParams, setFlowStateCallback) => {
  window.mxEditor = mxEditor;
  window.mxGraph = mxGraph;
  window.mxDefaultKeyHandler = mxDefaultKeyHandler;
  window.mxKeyHandler = mxKeyHandler;
  window.mxParallelEdgeLayout = mxParallelEdgeLayout;
  window.mxLayoutManager = mxLayoutManager;
  window.mxElbowEdgeHandler = mxElbowEdgeHandler;
  window.mxGeometry = mxGeometry;
  // window.mxOutline = mxOutline;
  window.mxPoint = mxPoint;

  const container = ref.current[0];
  const outline = ref.current[1];

  let graph = '';
  let editor = '';
  // Checks if the browser is supported
  if (!mxClient.isBrowserSupported()) {
    // Displays an error message if the browser is not supported.
    mxUtils.error('Browser is not supported!', 200, false);
  } else {
    if (mxClient.IS_QUIRKS) {
      document.body.style.overflow = 'hidden';
      new mxDivResizer(container);
    }

    const doc = mxUtils.parseXml(KeyHandler);
    const config = doc.getElementsByTagName('mxEditor')[0];
    editor = new mxEditor(config);
    graph = editor.graph;
    initialGraphProperties(editor);

    // Sets the graph container and configures the editor
    editor.setGraphContainer(container);
    // Automatically handle parallel edges
    const layout = new mxParallelEdgeLayout(graph);
    const layoutMgr = new mxLayoutManager(graph);
    layoutMgr.getLayout = function (cell) {
      if (cell.getChildCount() > 0) {
        return layout;
      }
    };

    convertValueToString(graph);

    graph.popupMenuHandler.factoryMethod = (menu, cell, evt) => {
      return createPopupMenu(editor, menu, cell, evt);
    };

    new mxOutline(graph, outline);

    // this.bindEventToSaveCanvas(flowRef, editor);
    // this.bindCellConnected(flowRef, editor);

    bindNodeAdd(ref, extraParams, editor);
    bindNodeRemove(ref, extraParams, editor);
    bindNodeMove(ref, extraParams, editor);
    bindNodeConnect(ref, extraParams, editor);
    // bindNodeDoubleClick(ref, extraParams, editor, callback);
    bindNodeDoubleClick(ref, extraParams, editor);

    setFlowStateCallback({ editor: editor });
  }
};

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

const bindNodeAdd = (ref, extraParams, editor) => {
  const { graph } = editor;

  graph.addListener(mxEvent.ADD_CELLS, (sender, evt) => {
    const cell = evt.properties.cells[0];
    cell.nodeType = cell.value.nodeType;
    cell.nodeId = `${cell.value.nodeType}_${cell.id}`;

    this.receiveEvent(`onChangeCanvas`, ref, extraParams, editor);
    evt.consume();
  });
};

const bindNodeRemove = (ref, extraParams, editor) => {
  const { graph } = editor;

  graph.addListener(mxEvent.REMOVE_CELLS, (sender, evt) => {
    this.receiveEvent(`onChangeCanvas`, ref, extraParams, editor);
    evt.consume();
  });
};

const bindNodeMove = (ref, extraParams, editor) => {
  const { graph } = editor;

  graph.addListener(mxEvent.CELLS_MOVED, (sender, evt) => {
    this.receiveEvent(`onChangeCanvas`, ref, extraParams, editor);
    evt.consume();
  });
};

const bindNodeConnect = (ref, extraParams, editor) => {
  const { graph } = editor;

  graph.addListener(mxEvent.CONNECT_CELL, (sender, evt) => {
    this.receiveEvent(`onChangeCanvas`, ref, extraParams, editor);
    evt.consume();
  });
};

// bindCellConnected = (ref, editor) => {
//   const graph = editor.graph;
//   graph.addListener(mxEvent.CELL_CONNECTED, (sender, evt) => {
//     console.log("connect");

//     this.receiveEvent(`onCellConnected`, ref, editor);

//     const edge = [evt.getProperty("edge")];
//     // validateEdgeConnect(graph, edge);

//     // let labels = document.querySelectorAll(
//     //   `#formDecisionNode input[name='label[]']`
//     // );

//     // console.log("labels: ", labels);

//     // for (i = 0; i < labels.length; i++) {
//     //   if (!$.isEmptyObject(labels[i].value)) {
//     //     if (labels[i].value === edge[0].value) {
//     //       document.getElementsByName("id[]")[i].value = edge[0].id;
//     //     }
//     //   }
//     // }
//   });
// };

const bindNodeDoubleClick = (ref, extraParams, editor, callback) => {
  const graph = editor.graph;

  graph.dblClick = (evt, cell) => {
    if (graph.enabled) {
      if (cell && cell.vertex) {
        // const extraParams = {
        //   editor: editor,
        //   cell: cell,
        // };
        extraParams.editor = editor;
        extraParams.cell = cell;

        this.receiveEvent(`onDblClickNode`, ref, extraParams, callback);
      }

      // Disables any default behaviour for the double click
      mxEvent.consume(evt);
    }
  };
};
