import { mxUtils, mxGraphModel, mxGeometry, mxCodec } from 'mxgraph-js';

import * as ValidationUtils from '@/common/utils/validationUtils';

export const readFlow = (ref, xmlFlow, editor) => {
  const { graph } = editor;

  if (!ValidationUtils.isEmpty(xmlFlow)) {
    window.mxGraphModel = mxGraphModel;
    window.mxGeometry = mxGeometry;
    const doc = mxUtils.parseXml(xmlFlow);
    const root = doc.getElementsByTagName('mxGraphModel')[0];
    const dec = new mxCodec(root.ownerDocument);
    dec.decode(root, graph.getModel());
    graph.getView().refresh();
  }
};
