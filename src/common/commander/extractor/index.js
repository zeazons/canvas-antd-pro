import * as ExtractorWorker from './extractorWorker';

export const receive = (key, data) => {
  return ExtractorWorker.execute(key, data);
};
