import * as ActionReaderWorker from './actionReaderWorker';

export const receive = (key, data) => {
  const extractor = ActionReaderWorker.execute(key, data);

  return extractor;
};
