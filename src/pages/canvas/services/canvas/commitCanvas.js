import connectCommander from '@/common/commander/connector';

export const commitCanvas = async (refs, params, extraParams, callback) => {
  const request = {
    url: 'canvas/rpc',
    options: {
      method: 'POST',
      data: { ...params, method: 'commitCanvas' },
    },
  };

  return connectCommander(refs, request, extraParams, callback);
};
