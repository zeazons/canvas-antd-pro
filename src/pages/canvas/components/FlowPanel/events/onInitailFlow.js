import * as Worker from '../worker';

export const onInitailFlow = (ref, extraParams, context) => {
  Worker['initailFlow'](ref, extraParams, context);
};
