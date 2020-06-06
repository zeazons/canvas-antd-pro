// import request from 'umi-request';
import request from '@/utils/request';
// import request from '@/utils/common-request';

export async function queryRule(params) {
  return request('/api/rule', {
    params,
  });
  // .then(function (response) {
  //   console.log('response: ', response);
  // });
  // .catch(function (error) {
  //   console.log(error);
  // });
}
export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
