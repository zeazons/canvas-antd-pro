import connectCommander from '@/common/commander/connector';

export const loadCanvas = async (refs, params, extraParams, callback) => {
  const request = {
    url: 'canvas/rpc',
    options: {
      method: 'POST',
      data: { ...params, method: 'loadCanvas' },
    },
  };

  return connectCommander(refs, request, extraParams, callback);
};
