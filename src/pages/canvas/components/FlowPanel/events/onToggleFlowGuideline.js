import * as Worker from '../worker';

export const onToggleFlowGuideline = (editor) => {
  Worker['toggleFlowGuideline'](editor);
};
