import * as Worker from '../commander/worker';

export const onLock = (ref, data, editor) => {
  Worker['lock'](ref, data, editor);
};
