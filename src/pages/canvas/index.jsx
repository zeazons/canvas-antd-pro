import React, { useEffect, useState, useRef, forwardRef } from 'react';
import { Button } from 'antd';

import * as Worker from '@/uiWorker';
import * as Services from './services';
import * as FlowUtiles from './components/FlowPanel/utils/flowUtiles';
import * as NodeConstant from './constants/nodeConstant';

import { CanvasContextProvider } from './context';

import FlowPanel from './components/FlowPanel';
import WidgetsPanel from './components/WidgetsPanel';
import ToolbarPanel from './components/ToolbarPanel';
import PropertiesPanel from './components/PropertiesPanel';

import NoProperties from './components/properties/NoProperties';
import CodeProperties from './components/properties/CodeProperties';

import * as Events from './events';

import styles from './assets/less/style.less';

const renderProperties = (props, nodeData) => {
  switch (nodeData.nodeType) {
    // case NodeConstant.NODE_TYPE_DECISION:
    //   return (
    //     <DecisionProperties
    //       {...props}
    //       nodeType={nodeData.nodeType}
    //       nodeId={nodeData.nodeId}
    //       nodeName={nodeData.nodeName}
    //       group={nodeData.group}
    //     />
    //   );
    case NodeConstant.NODE_TYPE_CODE:
      return (
        <CodeProperties
          {...props}
          nodeType={nodeData.nodeType}
          nodeId={nodeData.nodeId}
          nodeName={nodeData.nodeName}
          group={nodeData.group}
        />
      );
    // case NodeConstant.NODE_TYPE_SCREEN:
    //   return (
    //     <ScreenProperties
    //       {...props}
    //       nodeType={nodeData.nodeType}
    //       nodeId={nodeData.nodeId}
    //       nodeName={nodeData.nodeName}
    //       group={nodeData.group}
    //     />
    //   );
    // case NodeConstant.NODE_TYPE_KEY:
    //   return (
    //     <KeyProperties
    //       {...props}
    //       nodeType={nodeData.nodeType}
    //       nodeId={nodeData.nodeId}
    //       nodeName={nodeData.nodeName}
    //       group={nodeData.group}
    //     />
    //   );
    default:
      return <NoProperties />;
  }
};

const Canvas = forwardRef((props, ref) => {
  const [isWidgetsShow, setIsWidgetsShow] = useState({ visibled: false });
  const [nodeProperties, setNodeProperties] = useState({});

  const refs = useRef(Array.from({ length: 4 }, (objRef) => React.createRef()));
  const events = [];

  const onToolButtonClick = (event, topic) => {
    const { editor } = refs.current[0].getData();

    let dataParams = {
      params: {
        data: { username: 'Ronaldo', canvasId: '250' },
      },
    };

    let isWidgetsShowFlag;

    switch (topic) {
      case 'expandWidgets':
        // this.eventBloc.expandWidgets(refs, { visibled: true }, this.setIsWidgetsShow);
        // const data = { visibled: true };

        isWidgetsShowFlag = { visibled: true };
        Worker.expandWidgets(refs, isWidgetsShowFlag, setIsWidgetsShow(isWidgetsShowFlag));
        break;

      case 'collapseWidgets':
        // this.eventBloc.collapseWidgets(refs, { visibled: false }, this.setIsWidgetsShow);
        // const data = { visibled: false };
        isWidgetsShowFlag = { visibled: false };
        Worker.expandWidgets(refs, isWidgetsShowFlag, setIsWidgetsShow(isWidgetsShowFlag));
        break;

      case 'editFlow':
        // this.eventBloc.editFlow(refs, extraParams, this.setIsWidgetsShow);
        dataParams.params.data.editing = true;
        Services.editCanvas(refs, dataParams, editor);
        break;

      case 'saveFlow':
        // const editor = this.state.editor;
        // this.eventBloc.saveFlow(refs, editor);
        dataParams.params.data.graphModel = FlowUtiles.getXmlGraphModel(editor);
        Services.saveCanvas(refs, dataParams, editor);
        break;

      case 'commitFlow':
        // this.eventBloc.commitFlow(refs, extraParams, this.setIsWidgetsShow);
        dataParams.params.data.editing = false;
        Services.commitCanvas(refs, dataParams, editor);
        break;

      case 'discardFlow':
        // this.eventBloc.discardFlow(refs, extraParams, this.setIsWidgetsShow);
        dataParams.params.data.editing = false;
        Services.discardCanvas(refs, dataParams, editor);
        break;

      case 'closeFlow':
        // this.eventBloc.closeFlow(refs);
        Services.closeCanvas(refs, dataParams, editor);
        break;

      case 'undoFlow':
        // this.eventBloc.undoFlow(refs);
        Services.undoCanvas(refs, dataParams, editor);
        break;

      case 'redoFlow':
        // this.eventBloc.redoFlow(refs);
        Services.redoCanvas(refs, dataParams, editor);
        break;

      case 'toggleFlowGuideline':
        refs.current[0].toggleFlowGuideline();
        break;

      case 'zoomOutFlow':
        refs.current[0].zoomOutFlow();
        break;
      case 'zoomInFlow':
        refs.current[0].zoomInFlow();
        break;
      case 'zoomActualSize':
        refs.current[0].zoomActualSize();
        break;
      case 'zoomFitSize':
        refs.current[0].zoomFitSize();
        break;

      default:
        break;
    }
  };

  const onWidgetsFilter = (event) => {
    const { editor } = refs.current[0].getData();
    let dataParams = {
      params: {
        data: {
          search: event.target.value,
        },
      },
    };

    Services.loadWidgets(refs, dataParams, editor);
  };

  return (
    <CanvasContextProvider>
      <Button
        onClick={() => {
          const { editor } = refs.current[0].getData();

          const dataParams = {
            params: {
              data: { username: 'Ronaldo', canvasId: '250' },
            },
          };
          Services.loadCanvas(refs, dataParams, editor);
        }}
      >
        Load Canvas
      </Button>

      <FlowPanel ref={(el) => (refs.current[0] = el)} />
      <WidgetsPanel
        className={styles.canvasWidgets}
        // events={events}
        onWidgetsFilter={onWidgetsFilter}
        ref={(el) => (refs.current[1] = el)}
      />
      <ToolbarPanel
        className={styles.canvasToolbar}
        onToolButtonClick={onToolButtonClick}
        // events={events}
        ref={(el) => (refs.current[2] = el)}
      />
      <PropertiesPanel ref={(el) => (refs.current[3] = el)}>
        {/* {renderProperties(props, nodeProperties)} */}
      </PropertiesPanel>
    </CanvasContextProvider>
  );
});

export default Canvas;
