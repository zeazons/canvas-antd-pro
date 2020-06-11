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
