import * as Worker from '../worker';
export const initailFlow = (ref, extraParams, setFlowStateCallback) => {
  Worker['initailFlow'](ref, extraParams, setFlowStateCallback);
};
