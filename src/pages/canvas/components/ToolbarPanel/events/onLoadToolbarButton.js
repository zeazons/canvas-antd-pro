import * as Worker from '../worker';

export const onLoadToolbarButton = (ref, extraParams, setFlowStateCallback) => {
  Worker['loadToolbarButton'](ref, extraParams, setFlowStateCallback);
};
