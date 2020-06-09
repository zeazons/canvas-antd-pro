import * as Command from '@/common/worker';

export const execute = (actions) => {
  actions.every((item) => {
    const { name: fnName, params: value, force } = item;

    try {
      Command[fnName](value);
      return true;
    } catch (error) {
      console.warn('| === Function verified === |');
      console.warn('function name:', fnName);
      console.warn('force:', force);
      console.warn('| ========================= |');

      if (force) {
        throw `Function "${fnName}" not found!`;
      }

      return !force;
    }
  });
};
