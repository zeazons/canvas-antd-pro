export const showProperties = (refs, data) => {
  const { nodeType, systemType, icon } = data.cell;

  refs.current[3].show(true);
  refs.current[3].setData({
    icon: icon,
    title: nodeType,
    description: systemType,
    ...data.cell,
  });
};
