import * as Worker from '../commander/worker';

export const onInitailFlow = (ref, extraParams, context) => {
  Worker['initailFlow'](ref, extraParams, context);
};
