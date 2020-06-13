export const loadToolbarButton = (refs, data) => {
  const { tools } = data;

  refs.current[2].setData(tools);
};
