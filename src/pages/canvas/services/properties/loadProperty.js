import connectCommander from '@/common/commander/connector';

export const loadProperty = async (refs, params, extraParams, callback) => {
  const request = {
    url: 'canvas/rpc',
    options: {
      method: 'POST',
      data: { ...params, method: 'loadProperty' },
    },
  };

  return connectCommander(refs, request, extraParams, callback);
};
