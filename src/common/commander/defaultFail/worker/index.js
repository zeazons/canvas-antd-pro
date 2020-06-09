import { notification } from 'antd';

export const execute = (data) => {
  notification.error({
    message: data.message,
    description: data.desc,
  });
};
