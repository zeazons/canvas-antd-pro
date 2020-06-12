import * as Worker from '../commander/worker';

export const onReadFlow = (ref, xmlFlow, editor) => {
  Worker['readFlow'](ref, xmlFlow, editor);
};
