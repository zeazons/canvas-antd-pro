import * as Services from '../../services';

export const onNodeDblClick = (refs, data, cell) => {
  const { nodeId, nodeType, systemType, icon } = cell;
  const extraParams = {
    icon: icon,
    title: nodeType,
    description: systemType,
  };

  refs.current[3].show();
  refs.current[3].setData(extraParams);

  const requestParams = {
    params: {
      data: { ...data, nodeType, nodeId },
    },
  };

  Services.loadProperty(refs, requestParams);
};
