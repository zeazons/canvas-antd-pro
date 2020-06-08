import { notification } from 'antd';

export const execute = (message, desc) => {
  notification.error({
    message: message,
    description: desc,
  });
};
