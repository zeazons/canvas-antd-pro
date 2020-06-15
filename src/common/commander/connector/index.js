import * as Commander from '..';
import { default as UmiRequest, errorHandler } from './worker';

// /**
//  * This is common request for call api.
//  * @param {string} url
//  * @param {Object} options
//  * @callback onSuccess response - The callback that handles the response.
//  * @callback onError error - The callback that handles the error.
//  */
const connectCommander = (refs, requestData, extraParams, callback) => {
  let { url, options, onSuccess, onError } = requestData;
  let { method } = options;

  if (typeof method === 'undefined') {
    method = 'POST';
  }

  // add json rpc format
  options.data.id = 1;
  options.data.jsonrpc = '2.0';

  options = {
    method,
    prefix: 'https://zerox.beebuddy.net:4454/zerox/apis/',
    ...options,
  };

  return UmiRequest(url, options) //  prefix: '/zerox/apis',
    .then(function (response) {
      if (onSuccess) {
        onSuccess(response);
      } else {
        // console.log('| === Extract Data === |');
        // console.log('response: ', response);
        // Commander.receive(response);
        Commander.receive(refs, response, extraParams);
        if (callback) {
          callback();
        }

        return response;
      }
    })
    .catch(function (error) {
      if (onError) {
        onError(error);
      } else {
        errorHandler(error);
      }
    });
};

export default connectCommander;
