import * as Worker from '../commander/worker';

export const onToggleFlowGuideline = (editor) => {
  Worker['toggleFlowGuideline'](editor);
};
