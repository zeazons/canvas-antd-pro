import { message } from 'antd';

export const popupMessage = (data) => {
  const { type, message: msgErr } = data;

  if (msgErr) {
    switch (type) {
      case 'success':
        message.success(msgErr);
        break;

      case 'info':
        message.info(msgErr);
        break;

      case 'loading':
        message.loading(msgErr);
        break;

      case 'warn':
        message.warn(msgErr);
        break;

      case 'error':
        message.error(msgErr);
        break;

      default:
        message.error(msgErr);
        break;
    }
  } else {
    message.error(data);
  }
};
