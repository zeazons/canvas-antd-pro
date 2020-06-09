import * as Worker from './worker';

export const receive = (message, desc) => {
  return Worker.execute(message, desc);
};
