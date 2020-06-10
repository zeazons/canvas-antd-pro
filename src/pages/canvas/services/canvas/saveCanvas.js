import connectCommander from '@/common/commander/connector';

export const saveCanvas = async (refs, params, extraParams, callback) => {
  const request = {
    url: 'canvas/rpc',
    options: {
      method: 'POST',
      data: { ...params, method: 'saveCanvas' },
    },
  };

  return connectCommander(refs, request, extraParams, callback);
};
