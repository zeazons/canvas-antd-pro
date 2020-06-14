import * as Services from '../services';

export const onPropertySave = (refs, data) => {
  const nodeProperties = refs.current[3].getData();
  const { nodeId, codeString } = nodeProperties;
  const requestParams = {
    params: {
      data: { ...data, nodeId, nodeProperty: { codeString } },
    },
  };

  Services.saveProperty(refs, requestParams);
};
