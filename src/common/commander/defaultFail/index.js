import * as Worker from './worker';

export const receive = (key, data) => {
  return Worker.execute(key, data);
};
