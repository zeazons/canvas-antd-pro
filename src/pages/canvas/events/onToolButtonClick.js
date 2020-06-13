import * as UICommander from '@/uiCommander';
import * as Services from '../services';

export const onToolButtonClick = (refs, topic) => {
  const { editor } = refs.current[0].getData();

  let dataParams = {
    params: {
      data: { username: 'Ronaldo', canvasId: '250' },
    },
  };

  let isWidgetsShowFlag;

  switch (topic) {
    case 'CollapseWidgets':
      refs.current[2].collapse();
      isWidgetsShowFlag = { visibled: false };
      UICommander.expandWidgets(refs, isWidgetsShowFlag);
      break;

    case 'ExpandWidgets':
      refs.current[2].expand();
      isWidgetsShowFlag = { visibled: true };
      UICommander.expandWidgets(refs, isWidgetsShowFlag);
      break;

    case 'EditFlow':
      dataParams.params.data.editing = true;
      Services.editCanvas(refs, dataParams, editor);
      break;

    case 'SaveFlow':
      dataParams.params.data.graphModel = FlowUtiles.getXmlGraphModel(editor);
      Services.saveCanvas(refs, dataParams, editor);
      break;

    case 'CommitFlow':
      dataParams.params.data.editing = false;
      Services.commitCanvas(refs, dataParams, editor);
      break;

    case 'DiscardFlow':
      dataParams.params.data.editing = false;
      Services.discardCanvas(refs, dataParams, editor);
      break;

    case 'CloseFlow':
      Services.closeCanvas(refs, dataParams, editor);
      break;

    case 'UndoFlow':
      Services.undoCanvas(refs, dataParams, editor);
      break;

    case 'RedoFlow':
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
};
