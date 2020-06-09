import { notification } from 'antd';

import * as ExtractorCommander from './extractor';
import * as ActionReaderCommander from './actionReader';
import * as DefaultFail from './defaultFail';

import * as Worker from './worker';

export const receive = (data) => {
  try {
    const events = ExtractorCommander.receive('action', data);
    const actions = ActionReaderCommander.receive('events', events);

    Worker.execute(actions);
  } catch (err) {
    const data = {
      message: err ? err : err.message,
    };

    DefaultFail.receive(data);
  }
};
