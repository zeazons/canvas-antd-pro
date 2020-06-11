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

import * as FlowUtiles from '../utils/flowUtiles';
// import connectCommander from '@/common/commander/connector';
import * as Services from '../../../services';
import * as Worker from '@/uiWorker';

import KeyHandler from '../assets/KeyHandler.txt';

const callSaveCanvasServices = (refs, extraParams, editor) => {
  let dataParams = {
    params: {
      data: {
        ...extraParams,
        graphModel: FlowUtiles.getXmlGraphModel(editor),
      },
    },
  };

  Services.saveCanvas(refs, dataParams, editor);
};

export const initailFlow = (refs, extraParams, callback) => {
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

  const container = refs.current[0];
  const outline = refs.current[1];

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
    FlowUtiles.initialGraphProperties(editor);

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

    FlowUtiles.convertValueToString(graph);

    graph.popupMenuHandler.factoryMethod = (menu, cell, evt) => {
      return FlowUtiles.createPopupMenu(editor, menu, cell, evt);
    };

    new mxOutline(graph, outline);

    // this.bindEventToSaveCanvas(flowrefs, editor);
    // this.bindCellConnected(flowrefs, editor);

    bindNodeAdd(refs, extraParams, editor);
    bindNodeRemove(refs, extraParams, editor);
    bindNodeMove(refs, extraParams, editor);
    bindNodeConnect(refs, extraParams, editor);
    // bindNodeDoubleClick(refs, extraParams, editor, callback);
    bindNodeDoubleClick(refs, extraParams, editor, callback);

    callback({ editor: editor });
  }
};

export const loadFlow = (refs, callback) => {
  var container = refs.current[0];
  // Checks if the browser is supported
  if (!mxClient.isBrowserSupported()) {
    // Displays an error message if the browser is not supported.
    mxUtils.error('Browser is not supported!', 200, false);
  } else {
    var graph = new mxGraph(container);

    callback({ graph });
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

const bindNodeAdd = (refs, extraParams, editor) => {
  const { graph } = editor;

  graph.addListener(mxEvent.ADD_CELLS, (sender, evt) => {
    const cell = evt.properties.cells[0];
    cell.nodeType = cell.value.nodeType;
    cell.nodeId = `${cell.value.nodeType}_${cell.id}`;

    // this.receiveEvent(`onChangeCanvas`, ref, extraParams, editor);
    callSaveCanvasServices(refs, extraParams, editor);
    evt.consume();
  });
};

const bindNodeRemove = (refs, extraParams, editor) => {
  const { graph } = editor;

  graph.addListener(mxEvent.REMOVE_CELLS, (sender, evt) => {
    callSaveCanvasServices(refs, extraParams, editor);
    evt.consume();
  });
};

const bindNodeMove = (refs, extraParams, editor) => {
  const { graph } = editor;

  graph.addListener(mxEvent.CELLS_MOVED, (sender, evt) => {
    callSaveCanvasServices(refs, extraParams, editor);
    evt.consume();
  });
};

const bindNodeConnect = (refs, extraParams, editor) => {
  const { graph } = editor;

  graph.addListener(mxEvent.CONNECT_CELL, (sender, evt) => {
    callSaveCanvasServices(refs, extraParams, editor);
    evt.consume();
  });
};

// bindCellConnected = (refs, editor) => {
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

const bindNodeDoubleClick = (refs, extraParams, editor, callback) => {
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

        // this.receiveEvent(`onDblClickNode`, ref, extraParams, callback);

        Worker.showProperties(refs, extraParams, callback);
      }

      // Disables any default behaviour for the double click
      mxEvent.consume(evt);
    }
  };
};
