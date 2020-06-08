export const execute = (key, data) => {
  return readerData(key, data);
  // let resObj = {};
  // if (!isEmpty(data)) {
  //   let eventList = readerData('events', data);

  //   if (isValidEventList(eventList)) {
  //     eventList['success'] = true;
  //     resObj = eventList;
  //   } else {
  //     resObj = generateExceptionMessage({
  //       message: ExceptionConstants.MSG_CAN_NOT_READ_ACTION,
  //     });
  //   }
  // } else {
  //   resObj = generateExceptionMessage({
  //     message: ExceptionConstants.MSG_CAN_NOT_READ_ACTION,
  //   });
  // }

  // return resObj;
};

const readerData = (key, data) => {
  return data[key];
};

const isValidEventList = (data) => {
  return isArray(data) && data.length > 0;
};
