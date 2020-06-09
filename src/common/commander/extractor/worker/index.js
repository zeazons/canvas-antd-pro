import _ from 'lodash';
import * as ValidationUtils from '@/common/utils/validationUtils';

export const execute = (key, data) => {
  if (!ValidationUtils.isEmpty(data)) {
    let actionList = extractData(key, data.result);
    if (isValidActionList(actionList)) {
      return actionList;
    } else {
      throw 'Action is empty.';
    }
  } else {
    throw 'Can not extract data.';
  }
};

const extractData = (key, data) => {
  return data[key];
};

const isValidActionList = (data) => {
  return !ValidationUtils.isEmpty(data) && ValidationUtils.isObject(data);
};
