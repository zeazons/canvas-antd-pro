import connectCommander from '@/common/commander/connector';

export const redoCanvas = async (refs, params, extraParams, callback) => {
  const request = {
    url: 'canvas/rpc',
    options: {
      method: 'POST',
      data: { ...params, method: 'redoCanvas' },
    },
  };

  return connectCommander(refs, request, extraParams, callback);
};
