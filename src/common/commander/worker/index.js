import * as Worker from '@/common/worker';

export const execute = (refs, actions, extraParams, callback) => {
  actions.every((item) => {
    const { name: fnName, params: value, force } = item;

    try {
      Worker[fnName](refs, value, extraParams, callback);
      return true;
    } catch (error) {
      console.warn('| === Function verified === |');
      console.warn('function name:', fnName);
      console.warn('value:', value);
      console.warn('force:', force);
      console.warn('| ========================= |');

      if (force) {
        throw `Function "${fnName}" not found!`;
      }

      return !force;
    }
  });
};
