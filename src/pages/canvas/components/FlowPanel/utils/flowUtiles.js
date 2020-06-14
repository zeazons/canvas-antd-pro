import {
  mxEvent,
  mxConstants,
  mxGraphHandler,
  mxGuide,
  mxEdgeHandler,
  mxImage,
  mxCodec,
  mxUtils,
  mxPopupMenu,
} from 'mxgraph-js';

import _ from 'lodash';

import ICON_CONNECT from '../assets/images/icon_connect.png';
import ICON_SUBMENU from '../assets/images/submenu.gif';

import ICON_CUT from '../assets/icon/cut-solid.svg';
import ICON_COPY from '../assets/icon/copy-solid.svg';
import ICON_PASTE from '../assets/icon/paste-solid.svg';
import ICON_TRASH from '../assets/icon/trash-solid.svg';
import ICON_PRINT from '../assets/icon/print-solid.svg';
import ICON_EDGE from '../assets/icon/slash-solid.svg';
import ICON_DEFAULT from '../assets/icon/long-arrow-alt-right-solid.svg';
import ICON_SIGNATURE from '../assets/icon/signature-solid.svg';
import ICON_LOOP from '../assets/icon/redo-alt-solid.svg';
import ICON_ORTHGONAL from '../assets/icon/level-down-alt-solid.svg';

const HEADER_SIZE = 100;
const FOOTER_SIZE = 100;

export const actionClick = (editor, action) => {
  editor.execute(action);
};

export const initialGraphEvent = (editor) => {
  const graph = editor.graph;
  graph.dblClick = function (evt, cell) {
    console.log('dblClick');

    // const form = document.getElementsByTagName("form")[0];

    // if (form !== undefined && form.checkValidity()) {
    //   resetNodePropertiesSelected();
    //   // setNoProperties();
    // }

    // var cell = graph.getSelectionCell();

    // const isChange = getStore("nodePropsStore")
    //   ? getStore("nodePropsStore").isChange
    //   : false;

    // if (isChange) {
    //   graph.clearSelection();
    //   // graph.selectPreviousCell();
    //   setIsChangeNodeProperties(true);
    //   ConfirmPopup.confirm(
    //     TITLE_CONFIRM_SAVE_NODE_PROPS,
    //     MSG_CONFIRM_SAVE_NODE_PROPS,
    //     () => {
    //       // confirm
    //       document.getElementsByClassName("btn btn-sm btn-canvas")[0].click();
    //     },
    //     () => {
    //       // cancel
    //       routeNodeProperties(graph);
    //       setIsChangeNodeProperties("");
    //     }
    //   );
    // } else {
    //   routeNodeProperties(graph, cell);
    // }

    // Disables any default behaviour for the double click
    mxEvent.consume(evt);
  };

  graph.addListener(mxEvent.CELL_CONNECTED, function (sender, evt) {
    console.log('connect');

    const edge = [evt.getProperty('edge')];
    // validateEdgeConnect(graph, edge);

    // let labels = document.querySelectorAll(
    //   `#formDecisionNode input[name='label[]']`
    // );

    // console.log("labels: ", labels);

    // for (i = 0; i < labels.length; i++) {
    //   if (!$.isEmptyObject(labels[i].value)) {
    //     if (labels[i].value === edge[0].value) {
    //       document.getElementsByName("id[]")[i].value = edge[0].id;
    //     }
    //   }
    // }
  });

  // graph.connectionHandler.addListener(mxEvent.CONNECT, function(sender, evt) {
  //   var cells = [evt.getProperty("cell")];
  //   validateEdgeConnect(cells);
  // });

  // graph.addListener(mxEvent.ADD_CELLS, function(sender, evt) {
  //   var cells = [evt.getProperty("cells")];
  //   console.log("ADD_CELLS cells: ", cells);
  // });

  // graph.addListener(mxEvent.CELLS_ADDED, function(sender, evt) {
  //   var cells = [evt.getProperty("cell")];
  //   console.log("CELLS_ADDED cells: ", cells);
  // });

  graph.getSelectionModel().addListener(mxEvent.CHANGE, function (sender, evt) {
    console.log('change');
    const cell = graph.getSelectionCell();

    // if (NODE_START === getNodeTypeByCell(cell)) {
    //   return true;
    // }
    // setStartNodeVlisable(graph);

    // FlowController.setNodeCounter(graph);
  });
};

export const initialGraphProperties = (editor) => {
  const graph = editor.graph;

  mxConstants.MIN_HOTSPOT_SIZE = 16;
  mxConstants.DEFAULT_HOTSPOT = 1;
  // Changes some default colors
  mxConstants.HANDLE_FILLCOLOR = '#99ccff';
  mxConstants.HANDLE_STROKECOLOR = '#0088cf';
  mxConstants.VERTEX_SELECTION_COLOR = '#00a8ff';

  // Enables guides
  mxGraphHandler.prototype.guidesEnabled = true;

  // Alt disables guides
  mxGuide.prototype.isEnabledForEvent = function (evt) {
    return !mxEvent.isAltDown(evt);
  };

  // Enables snapping waypoints to terminals
  mxEdgeHandler.prototype.snapToTerminals = true;

  graph.view.setScale(1);
  graph.pageBreaksVisible = false;
  graph.pageBreakDashed = true;
  graph.preferPageSize = true;
  graph.centerZoom = false;
  graph.setPanning(true);

  // disable move edge connection
  // graph.setCellsDisconnectable(false);
  // graph.setDisconnectOnMove(false);

  // Enables HTML labels as wrapping is only available for those
  graph.setHtmlLabels(true);

  // To show the images in the outline, uncomment the following code
  //outln.outline.labelsVisible = true;
  //outln.outline.setHtmlLabels(true);

  // Removes header and footer from page height
  graph.pageFormat.height -= HEADER_SIZE + FOOTER_SIZE;

  // Takes zoom into account for moving cells
  graph.graphHandler.scaleGrid = true;

  // Disable highlight of cells when dragging from toolbar
  graph.setDropEnabled(false);

  // Uses the port icon while connections are previewed
  graph.connectionHandler.getConnectImage = function (state) {
    // return new mxImage(`url(${icon_connect})`, 12, 12);
    return new mxImage(ICON_CONNECT, 12, 12);
    // return new mxImage(state.style[mxConstants.STYLE_IMAGE], 16, 16);
  };

  // Centers the port icon on the target port
  graph.connectionHandler.targetConnectImage = false;

  // Does not allow dangling edges
  graph.setAllowDanglingEdges(false);
  // Enables new connections in the graph
  graph.setConnectable(true);
  graph.setMultigraph(false);
  // graph.setCellsResizable(false);

  // Make all vertices and edges uneditable
  graph.setCellsEditable(false);
  graph.setEdgeLabelsMovable(false);

  // graph.panningHandler.useLeftForPanning = true;
  // graph.setEnabled(true);
  // graph.view.setTranslate(50, 50);

  // Adds a highlight on the cell under the mousepointer
  // new mxCellTracker(graph);

  // Defines the default group to be used for grouping. The
  // default group is a field in the mxEditor instance that
  // is supposed to be a cell which is cloned for new cells.
  // The groupBorderSize is used to define the spacing between
  // the children of a group and the group bounds.
  // var group = new mxCell("Group", new mxGeometry(), "group");
  // group.setVertex(true);
  // group.setConnectable(false);
  // editor.defaultGroup = group;
  // editor.groupBorderSize = 20;

  // Disables drag-and-drop into non-swimlanes.
  graph.isValidDropTarget = function (cell, cells, evt) {
    return this.isSwimlane(cell);
  };

  // Disables drilling into non-swimlanes.
  graph.isValidRoot = function (cell) {
    return this.isValidDropTarget(cell);
  };

  // Does not allow selection of locked cells
  graph.isCellSelectable = function (cell) {
    return !this.isCellLocked(cell);
  };

  // Returns a shorter label if the cell is collapsed and no
  // label for expanded groups
  graph.getLabel = function (cell) {
    const tmp = mxGraph.prototype.getLabel.apply(this, arguments); // "supercall"

    if (this.isCellLocked(cell)) {
      // Returns an empty label but makes sure an HTML
      // element is created for the label (for event
      // processing wrt the parent label)
      return '';
    } else if (this.isCellCollapsed(cell)) {
      let index = tmp.indexOf('</h1>');

      if (index > 0) {
        tmp = tmp.substring(0, index + 5);
      }
    }

    return tmp;
  };

  // Disables global features
  graph.collapseToPreferredSize = false;
  graph.constrainChildren = false;
  graph.cellsSelectable = false;
  graph.extendParentsOnAdd = false;
  graph.extendParents = false;
  graph.border = 10;

  // Sets global styles
  // var style = graph.getStylesheet().getDefaultEdgeStyle();
  // style[mxConstants.STYLE_EDGE] = mxEdgeStyle.SegmentConnector;
  // style[mxConstants.STYLE_ROUNDED] = true;

  // style = graph.getStylesheet().getDefaultVertexStyle();
  // style[mxConstants.STYLE_FILLCOLOR] = "#ffffff";
  // style[mxConstants.STYLE_SHAPE] = "swimlane";
  // style[mxConstants.STYLE_STARTSIZE] = 30;

  // style = [];
  // style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
  // style[mxConstants.STYLE_STROKECOLOR] = "none";
  // style[mxConstants.STYLE_FILLCOLOR] = "none";
  // style[mxConstants.STYLE_FOLDABLE] = false;
  // graph.getStylesheet().putCellStyle("column", style);
};

export const convertValueToString = (graph) => {
  // Overrides method to provide a cell label in the display
  graph.convertValueToString = (cell) => {
    let display = '';
    if (cell && cell.vertex) {
      const value = cell.value;

      if (value) {
        // display = `${value.nodeName} (${cell.id})`;
        if (typeof value === 'string') {
          display = value;
        } else if (typeof value === 'object') {
          display = value.nodeName;
        }
      }
    } else if (cell.edge) {
      display = cell.value;
    }
    return display;
  };
};

export const getXmlGraphModel = (editor) => {
  const enc = new mxCodec(mxUtils.createXmlDocument());
  const node = enc.encode(editor.graph.getModel());

  return mxUtils.getPrettyXml(node);
};

export const createPopupMenu = (editor, menu, cell, evt) => {
  const graph = editor.graph;
  var model = graph.getModel();

  window.mxPopupMenu = mxPopupMenu;
  mxPopupMenu.prototype.submenuImage = ICON_SUBMENU;

  if (graph.isEnabled()) {
    if (!_.isEmpty(cell)) {
      // if (cell.value.nodeType === NODE_DECISION) {
      //   // let icCut = "../assets/icon/external-link-alt-solid.svg";
      //   menu.addItem("Open Subflow", ICON_OPEN, () => {
      //     const win = window.open("http://localhost:9999/", "_blank");
      //     win.focus();
      //   });

      //   menu.addSeparator();
      // }

      if (model.isVertex(cell)) {
        menu.addItem('Cut', ICON_CUT, () => {
          editor.execute('cut');
        });

        menu.addItem('Copy', ICON_COPY, () => {
          editor.execute('copy');
        });
      }
    }

    menu.addItem('Paste', ICON_PASTE, () => {
      // if(startNode !== null && stopNode !== null) {
      editor.execute('paste');
      // }
    });

    if (!_.isEmpty(cell) && (model.isVertex(cell) || model.isEdge(cell))) {
      menu.addItem('Delete', ICON_TRASH, () => {
        if (graph.isEnabled() && !graph.isSelectionEmpty()) {
          graph.removeCells();
          // if (cell.id == getStore(NODE_SELECTED_ID)) {
          //   // setNoProperties();
          //   // setStore(NODE_SELECTED_ID, null);
          // }
        }
      });
    }

    // menu.addSeparator();

    if (!_.isEmpty(cell) && cell.edge) {
      const styleMenu = menu.addItem('Style', ICON_EDGE);
      menu.addItem(
        'Default',
        ICON_DEFAULT,
        () => {
          const style = '';
          graph.getModel().setStyle(cell, style);
        },
        styleMenu,
      );
      menu.addItem(
        'Elbow',
        ICON_SIGNATURE,
        () => {
          const style = 'edgeStyle=elbowEdgeStyle;rounded=1;';
          graph.getModel().setStyle(cell, style);
        },
        styleMenu,
      );
      menu.addItem(
        'Entity Relation',
        ICON_SIGNATURE,
        () => {
          const style = 'edgeStyle=entityRelationEdgeStyle;rounded=1;';
          graph.getModel().setStyle(cell, style);
        },
        styleMenu,
      );
      menu.addItem(
        'Loop',
        ICON_LOOP,
        () => {
          const style = 'edgeStyle=loopEdgeStyle;rounded=1;';
          graph.getModel().setStyle(cell, style);
        },
        styleMenu,
      );
      menu.addItem(
        'Orthgonal',
        ICON_ORTHGONAL,
        () => {
          const style = 'edgeStyle=orthogonalEdgeStyle;rounded=1;';
          graph.getModel().setStyle(cell, style);
        },
        styleMenu,
      );

      // menu.addSeparator();
    }

    // menu.addItem('Print', ICON_PRINT, () => {
    //   printFlow(graph);
    // });
  }
};
