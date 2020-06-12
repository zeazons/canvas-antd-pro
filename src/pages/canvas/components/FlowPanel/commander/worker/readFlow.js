import { mxUtils, mxGraphModel, mxGeometry, mxCodec } from 'mxgraph-js';

import * as ValidationUtils from '@/common/utils/validationUtils';

export const readFlow = (editor, graphModel) => {
  const { graph } = editor;

  if (!ValidationUtils.isEmpty(graphModel)) {
    window.mxGraphModel = mxGraphModel;
    window.mxGeometry = mxGeometry;

    const doc = mxUtils.parseXml(graphModel);
    const root = doc.getElementsByTagName('mxGraphModel')[0];
    const dec = new mxCodec(root.ownerDocument);

    dec.decode(root, graph.getModel());
    graph.getView().refresh();
  }
};
