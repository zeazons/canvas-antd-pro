import * as Worker from '../worker';

export const onLock = (ref, data, editor) => {
  Worker['lock'](ref, data, editor);
};
