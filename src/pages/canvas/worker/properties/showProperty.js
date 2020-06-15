// export const showProperty = (refs, data) => {
//   refs.current[3].setData(data.nodeProperty);
// };

import * as Node from './node';

const transformData = (data) => {
  return Node.transformCodeNode(data);
  // const { nodeType } = data;
  // switch (nodeType) {
  //   case 'CODE':
  //     return Node.transformCodeNode(data);

  //   default:
  //     break;
  // }
};

export const showProperty = (refs, extraParams) => {
  // const nodeProperties = { nodeId: extraParams.nodeId, ...extraParams.nodeProperty };
  // const nodeProperties = { nodeId: extraParams.nodeId, ...extraParams.nodeProperty };
  const data = transformData(extraParams);

  refs.current[3].setData(data);
};
