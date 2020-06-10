import connectCommander from '@/common/commander/connector';

export const loadWidgets = async (refs, params, extraParams, callback) => {
  const request = {
    url: 'canvas/rpc',
    options: {
      method: 'POST',
      data: { ...params, method: 'loadWidgets' },
    },
  };

  return connectCommander(refs, request, extraParams, callback);
};
