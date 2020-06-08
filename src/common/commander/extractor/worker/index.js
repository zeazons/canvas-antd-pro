import _ from 'lodash';

export const execute = (key, data) => {
  console.log('key: ', key);
  console.log('data: ', data);

  if (_.isEmpty(data)) {
    throw 'Data is empty!';
  }

  return extractData(key, data.result);
  // let resObj = {};
  // if (!isEmpty(data)) {
  //   let actionList = extractData('action', data.result);
  //   if (isValidActionList(actionList)) {
  //     actionList['success'] = true;
  //     resObj = actionList;
  //   } else {
  //     resObj = generateExceptionMessage({
  //       message: ExceptionConstants.MSG_ACTION_IS_EMPTY,
  //     });
  //   }
  // } else {
  //   resObj = generateExceptionMessage({
  //     message: ExceptionConstants.MSG_CAN_NOT_EXTRACT_DATA,
  //   });
  // }

  // return resObj;
};

const extractData = (key, data) => {
  return data[key];
};

const isValidActionList = (data) => {
  return !isEmpty(data) && isObject(data);
};
