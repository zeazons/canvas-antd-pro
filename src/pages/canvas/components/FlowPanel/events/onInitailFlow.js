import * as Worker from '../worker';

export const onInitailFlow = (ref, extraParams, setFlowStateCallback) => {
  Worker['initailFlow'](ref, extraParams, setFlowStateCallback);
};
