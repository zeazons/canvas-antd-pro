import connect from '@/common/commander/connector';

export async function loadCanvas(refs, params, extraParams, callback) {
  // return request('canvas/rpc', {
  //   method: 'POST',
  //   data: { ...params, method: 'loadCanvas' },
  // });

  const request = {
    url: 'canvas/rpc',
    options: {
      method: 'POST',
      data: { ...params, method: 'loadCanvas' },
    },
  };

  return connect(refs, request, extraParams, callback);
}
