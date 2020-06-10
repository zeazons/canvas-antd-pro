import * as ValidationUtils from '@/common/utils/validationUtils';

const extractData = (key, data) => {
  return data[key];
};

const isValidActionList = (data) => {
  return !ValidationUtils.isEmpty(data) && ValidationUtils.isObject(data);
};

export const execute = (key, data) => {
  if (!ValidationUtils.isEmpty(data)) {
    const actionList = extractData(key, data.result);
    if (isValidActionList(actionList)) {
      return actionList;
    }
    throw new Error('Action is empty.');
  } else {
    throw new Error('Can not extract data.');
  }
};
