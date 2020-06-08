import request from '@/common/commander/connector';

export async function addRule(params) {
  return request('canvas/rpc', {
    method: 'POST',
    data: { ...params, method: 'loadCanvas' },
  });
}
