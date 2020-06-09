import connect from '@/common/commander/connector';

export async function queryRule(params) {
  return connect('/api/rule', { method: 'GET', ...params });
}
export async function removeRule(params) {
  return connect('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addRule(params) {
  return connect('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return connect('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
