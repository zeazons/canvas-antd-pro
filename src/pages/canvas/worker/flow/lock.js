export const lock = (refs, data) => {
  if (Object.keys(data)[0] === 'flow') {
    refs.current[0].lockFlow(data.flow);
  }
};
