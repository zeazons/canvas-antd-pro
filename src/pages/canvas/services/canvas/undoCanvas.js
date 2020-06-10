import connectCommander from '@/common/commander/connector';

export const undoCanvas = async (refs, params, extraParams, callback) => {
  const request = {
    url: 'canvas/rpc',
    options: {
      method: 'POST',
      data: { ...params, method: 'undoCanvas' },
    },
  };

  return connectCommander(refs, request, extraParams, callback);
};
