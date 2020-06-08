import * as Worker from './worker';

export const receive = (key, data) => {
  const extractor = Worker.execute(key, data);

  return extractor;
};
