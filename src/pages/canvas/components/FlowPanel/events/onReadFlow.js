import * as Worker from '../worker';

export const onReadFlow = (ref, xmlFlow, editor) => {
  Worker['readFlow'](ref, xmlFlow, editor);
};
