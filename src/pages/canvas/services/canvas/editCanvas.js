import connectCommander from '@/common/commander/connector';

export const editCanvas = async (refs, params, extraParams, callback) => {
  const request = {
    url: 'canvas/rpc',
    options: {
      method: 'POST',
      data: { ...params, method: 'setCanvasMode' },
    },
  };

  return connectCommander(refs, request, extraParams, callback);
};
