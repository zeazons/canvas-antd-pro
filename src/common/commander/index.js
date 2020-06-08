import { notification } from 'antd';

import * as UICommander from '../uiCommander';
import * as ExtractorCommander from './extractor';
import * as ActionReaderCommander from './actionReader';

export const receive = (data) => {
  try {
    const events = ExtractorCommander.receive('action', data);
    console.log('events: ', events);

    const actions = ActionReaderCommander.receive('events', events);
    console.log('actions: ', actions);
  } catch (err) {
    notification.error({
      message: err ? err : err.message,
      // description: 'Your network is abnormal and cannot connect to the server',
    });

    // UICommander.execute({}, data);
  }
};
