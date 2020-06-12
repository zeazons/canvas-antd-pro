import React, { useState, useReducer, createContext } from 'react';

import * as UICommander from '@/uiCommander';
import * as Services from '../services';

import * as FlowUtiles from '../components/FlowPanel/utils/flowUtiles';

export const CanvasContext = createContext(null);

export const CanvasContextConsumer = ({ children }) => {
  return <CanvasContext.Consumer>{(value) => children(value)}</CanvasContext.Consumer>;
};

export const CanvasContextProvider = (props) => {
  const [isWidgetsShow, setIsWidgetsShow] = useState({ visibled: false });

  const { refs } = props;

  const initialState = {
    state: {
      isPropertiesShow: false,
    },
    events: {
      onCanvasLoad: () => {
        const { editor } = refs.current[0].getData();

        const dataParams = {
          params: {
            data: { username: 'Ronaldo', canvasId: '250' },
          },
        };
        Services.loadCanvas(refs, dataParams, editor);
      },
      onCanvasSave: () => {
        const { editor } = refs.current[0].getData();
        const dataParams = {
          params: {
            data: {
              username: 'Ronaldo',
              canvasId: '250',
              graphModel: FlowUtiles.getXmlGraphModel(editor),
            },
          },
        };
        Services.saveCanvas(refs, dataParams, editor);
      },
      onNodeDblClick: (evt, cell) => {
        const { editor } = refs.current[0].getData();
        const extraParams = {};
        extraParams.cell = cell;
        extraParams.editor = editor;

        UICommander.showProperties(refs, extraParams);
      },
      onWidgetsFilter: (event) => {
        const { editor } = refs.current[0].getData();
        let dataParams = {
          params: {
            data: {
              search: event.target.value,
            },
          },
        };

        Services.loadWidgets(refs, dataParams, editor);
      },
      onToolButtonClick: (event, topic) => {
        const { editor } = refs.current[0].getData();

        let dataParams = {
          params: {
            data: { username: 'Ronaldo', canvasId: '250' },
          },
        };

        let isWidgetsShowFlag;

        switch (topic) {
          case 'CollapseWidgets':
            // this.eventBloc.expandWidgets(refs, { visibled: true }, this.setIsWidgetsShow);
            // const data = { visibled: true };

            isWidgetsShowFlag = { visibled: true };
            UICommander.expandWidgets(refs, isWidgetsShowFlag, setIsWidgetsShow(isWidgetsShowFlag));
            break;

          case 'ExpandWidgets':
            // this.eventBloc.collapseWidgets(refs, { visibled: false }, this.setIsWidgetsShow);
            // const data = { visibled: false };
            isWidgetsShowFlag = { visibled: false };
            UICommander.expandWidgets(refs, isWidgetsShowFlag, setIsWidgetsShow(isWidgetsShowFlag));
            break;

          case 'EditFlow':
            // this.eventBloc.editFlow(refs, extraParams, this.setIsWidgetsShow);
            dataParams.params.data.editing = true;
            Services.editCanvas(refs, dataParams, editor);
            break;

          case 'SaveFlow':
            // const editor = this.state.editor;
            // this.eventBloc.saveFlow(refs, editor);
            dataParams.params.data.graphModel = FlowUtiles.getXmlGraphModel(editor);
            Services.saveCanvas(refs, dataParams, editor);
            break;

          case 'CommitFlow':
            // this.eventBloc.commitFlow(refs, extraParams, this.setIsWidgetsShow);
            dataParams.params.data.editing = false;
            Services.commitCanvas(refs, dataParams, editor);
            break;

          case 'DiscardFlow':
            // this.eventBloc.discardFlow(refs, extraParams, this.setIsWidgetsShow);
            dataParams.params.data.editing = false;
            Services.discardCanvas(refs, dataParams, editor);
            break;

          case 'CloseFlow':
            // this.eventBloc.closeFlow(refs);
            Services.closeCanvas(refs, dataParams, editor);
            break;

          case 'UndoFlow':
            // this.eventBloc.undoFlow(refs);
            Services.undoCanvas(refs, dataParams, editor);
            break;

          case 'RedoFlow':
            // this.eventBloc.redoFlow(refs);
            Services.redoCanvas(refs, dataParams, editor);
            break;

          case 'ToggleGuideline':
            refs.current[0].toggleFlowGuideline();
            break;

          case 'ZoomOut':
            refs.current[0].zoomOutFlow();
            break;
          case 'ZoomIn':
            refs.current[0].zoomInFlow();
            break;
          case 'ZoomActualSize':
            refs.current[0].zoomActualSize();
            break;
          case 'ZoomFitSize':
            refs.current[0].zoomFitSize();
            break;

          default:
            break;
        }
      },
      onSubmit: (event) => {
        console.log('onSubmit');
        console.log('event: ', event);
      },
    },

    properties: {},
  };

  return <CanvasContext.Provider value={initialState}>{props.children}</CanvasContext.Provider>;
};
