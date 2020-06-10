import * as ValidationUtils from '@/common/utils/validationUtils';

const readerData = (key, data) => {
  return data[key];
};

const isValidEventList = (data) => {
  return ValidationUtils.isArray(data) && data.length > 0;
};

export const execute = (key, data) => {
  if (!ValidationUtils.isEmpty(data)) {
    const eventList = readerData(key, data);
    if (isValidEventList(eventList)) {
      return eventList;
    }
  }

  throw new Error('Can not read action.');
};
