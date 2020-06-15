import * as Services from '../../services';

import * as Node from './node';

const transformData = (data) => {
  const { title } = data;
  switch (title) {
    case 'CODE':
      return Node.transformCodeNode(data);

    default:
      break;
  }
};

export const onPropertySave = (refs, extraParams) => {
  const nodeProperties = refs.current[3].getData();

  const data = transformData(nodeProperties);
  const requestParams = {
    params: {
      data: { ...extraParams, ...data },
    },
  };

  Services.saveProperty(refs, requestParams, {}, () => {
    refs.current[3].close();
  });
};
