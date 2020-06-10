import {
  mxToolbar,
  mxConstants,
  mxPerimeter,
  mxCell,
  mxGeometry,
  mxEvent,
  mxUtils,
} from 'mxgraph-js';

import * as ValidationUtils from '@/common/utils/validationUtils';

import {
  NODE_START,
  NODE_END,
  NODE_DECISION,
  NODE_LOOP,
  NODE_IMAGE,
} from '../constants/nodeConstant';

const setNodeStyle = (graph, vertex, node) => {
  let { style } = node;

  if (!ValidationUtils.isEmpty(graph)) {
    graph.getModel().setStyle(vertex, style);
  }

  // let style = node.style;

  // if (node.nodeType === NODE_START) {
  //   style = `shape=ellipse;strokeWidth=2;fillColor=#28A745;strokeColor=#218838;noLabel=1`;
  // } else if (node.nodeType === NODE_END) {
  //   style = `shape=ellipse;strokeWidth=2;fillColor=#DB3545;strokeColor=#C82332;noLabel=1`;
  // } else if (node.nodeType === NODE_DECISION) {
  //   style = `shape=rhombus;strokeWidth=2;noLabel=1;rounded=0`;
  // } else if (node.nodeType === NODE_LOOP) {
  //   style = `shape=ellipse;strokeWidth=2;noLabel=1`;
  // } else if (node.nodeType === NODE_IMAGE) {
  //   style = `shape=image;image=${node.icon};spacingLeft=0`;
  // } else if (node.nodeType === "umlActor") {
  //   style = `shape=umlActor;spacingLeft=0`;
  // } else {
  //   style = `image=${node.icon}`;
  // }

  // if (!isEmpty(graph)) {
  //   graph.getModel().setStyle(vertex, style);
  // }
};

const addToolbarItem = (graph, toolbar, prototype, image) => {
  // Function that is executed when the image is dropped on
  // the graph. The cell argument points to the cell under
  // the mousepointer if there is one.
  const funct = function (graph, evt, cell, x, y) {
    // graph.stopEditing(false);

    const vertex = graph.getModel().cloneCell(prototype);
    vertex.geometry.x = x;
    vertex.geometry.y = y;

    graph.addCell(vertex);
    graph.setSelectionCell(vertex);
  };

  // Creates the image which is used as the drag icon (preview)
  const img = toolbar.addMode(null, image, function (evt, cell) {
    const pt = this.graph.getPointForEvent(evt);
    funct(graph, evt, cell, pt.x, pt.y);
  });

  // Disables dragging if element is disabled. This is a workaround
  // for wrong event order in IE. Following is a dummy listener that
  // is invoked as the last listener in IE.
  mxEvent.addListener(img, 'mousedown', function (evt) {
    // do nothing
  });

  // This listener is always called first before any other listener
  // in all browsers.
  mxEvent.addListener(img, 'mousedown', function (evt) {
    if (img.enabled == false) {
      mxEvent.consume(evt);
    }
  });

  mxUtils.makeDraggable(img, graph, funct);

  return img;
};

export const addNode = (el, graph, node) => {
  el.addEventListener('mouseover', () => {
    if (!ValidationUtils.isEmpty(graph)) {
      graph.getSelectionModel().clear();
    }
  });

  const toolbar = new mxToolbar(el);
  toolbar.enabled = false;

  // initialNodeCommon(graph);

  const addVertex = (node) => {
    const vertex = new mxCell(
      node,
      new mxGeometry(0, 0, node.width, node.height),
      // ,node.style)
    );

    setNodeStyle(graph, vertex, node);
    vertex.setVertex(true);

    const img = addToolbarItem(graph, toolbar, vertex, node.icon);
    // img.enabled = true;
    img.setAttribute('title', node.nodeName);

    if (!ValidationUtils.isEmpty(graph)) {
      graph.getSelectionModel().addListener(mxEvent.CHANGE, function () {
        const tmp = graph.isSelectionEmpty();
        // mxUtils.setOpacity(img, tmp ? 100 : 20);
        img.enabled = tmp;
      });
    }

    // const isEditable =
    //   getStore(FLOW_STORE) !== null ? getStore(FLOW_STORE).editing : true;
    // if (isEditable) {
    img.enabled = true;
    //   // mxUtils.setOpacity(img, 100);
    // } else {
    //   img.enabled = false;
    //   // mxUtils.setOpacity(img, 20);
    // }
  };
  addVertex(node);
};
