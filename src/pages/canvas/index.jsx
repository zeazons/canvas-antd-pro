import React, { useEffect, useRef, forwardRef } from 'react';
import { Button } from 'antd';

import * as Services from './services';
import * as FlowUtiles from './components/FlowPanel/utils/flowUtiles';

import FlowPanel from './components/FlowPanel';
import WidgetsPanel from './components/WidgetsPanel';
import ToolbarPanel from './components/ToolbarPanel';
import PropertiesPanel from './components/PropertiesPanel';

import * as Events from './events';

import styles from './assets/less/style.less';

const Canvas = forwardRef((props, ref) => {
  const refs = useRef(Array.from({ length: 4 }, (objRef) => React.createRef()));

  const onToolButtonClick = (event, topic) => {
    const { editor } = refs.current[0].getData();

    let dataParams = {
      params: {
        data: { username: 'Ronaldo', canvasId: '250' },
      },
    };

    switch (topic) {
      // case "loadFlow":
      //   this.flowRef.current.loadFlow();
      //   break;

      // case 'expandWidgets':
      //   this.eventBloc.expandWidgets(refs, { visibled: true }, this.setIsWidgetsShow);
      //   break;

      // case 'collapseWidgets':
      //   this.eventBloc.collapseWidgets(refs, { visibled: false }, this.setIsWidgetsShow);
      //   break;

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

  return (
    <>
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
        events={Events}
        ref={(el) => (refs.current[1] = el)}
      />
      <ToolbarPanel
        className={styles.canvasToolbar}
        onToolButtonClick={onToolButtonClick}
        ref={(el) => (refs.current[2] = el)}
      />
      <PropertiesPanel ref={(el) => (refs.current[3] = el)} />
    </>
  );
});

export default Canvas;
