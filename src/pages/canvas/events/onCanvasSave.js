import * as Services from '../services';
import * as FlowUtiles from '../components/FlowPanel/utils/flowUtiles';

export const onCanvasSave = (refs, data) => {
  const { editor } = refs.current[0].getData();
  const dataParams = {
    params: {
      data: {
        ...data,
        graphModel: FlowUtiles.getXmlGraphModel(editor),
      },
    },
  };
  Services.saveCanvas(refs, dataParams, editor);
};
