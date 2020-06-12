import * as Worker from '../commander/worker';

export const onLoadToolbarButton = (ref, extraParams, setFlowStateCallback) => {
  Worker['loadToolbarButton'](ref, extraParams, setFlowStateCallback);
};
