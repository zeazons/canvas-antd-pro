import * as UICommander from '@/uiCommander';
import * as Services from '../../services';

export const onToolButtonClick = (refs, data, topic) => {
  const { editor } = refs.current[0].getData();

  let requestParams = {
    params: {
      data: { ...data },
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
      requestParams.params.data.editing = true;
      Services.editCanvas(refs, requestParams, editor);
      break;

    case 'SaveFlow':
      requestParams.params.data.graphModel = FlowUtiles.getXmlGraphModel(editor);
      Services.saveCanvas(refs, requestParams, editor);
      break;

    case 'CommitFlow':
      requestParams.params.data.editing = false;
      Services.commitCanvas(refs, requestParams, editor);
      break;

    case 'DiscardFlow':
      requestParams.params.data.editing = false;
      Services.discardCanvas(refs, requestParams, editor);
      break;

    case 'CloseFlow':
      Services.closeCanvas(refs, requestParams, editor);
      break;

    case 'UndoFlow':
      Services.undoCanvas(refs, requestParams, editor);
      break;

    case 'RedoFlow':
      Services.redoCanvas(refs, requestParams, editor);
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
