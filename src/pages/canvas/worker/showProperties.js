export const showProperties = (refs, data) => {
  const { nodeType, systemType, icon } = data.cell;

  refs.current[3].show(true);
  refs.current[3].setData({
    title: nodeType,
    description: systemType,
  });
};
