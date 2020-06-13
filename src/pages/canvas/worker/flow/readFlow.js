export const readFlow = (refs, data) => {
  const { graphModel } = data;
  refs.current[0].readFlow(graphModel);
};
