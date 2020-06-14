import connectCommander from '@/common/commander/connector';

export const saveProperty = async (refs, params, extraParams, callback) => {
  const request = {
    url: 'canvas/rpc',
    options: {
      method: 'POST',
      data: { ...params, method: 'saveProperty' },
    },
  };

  return connectCommander(refs, request, extraParams, callback);
};
