export const showProperties = (refs, data, callback) => {
  const nodeData = {
    group: 'etc.',
    size: 'sm',
    ...data.cell,
  };

  const { nodeType, systemType } = data.cell;

  refs.current[3].show(true);
  refs.current[3].setData({
    title: nodeType,
    description: systemType,
  });
};
