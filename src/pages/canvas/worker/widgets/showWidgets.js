export const showWidgets = (refs, data) => {
  const { visibled } = data;

  refs.current[1].setVisible(visibled);
};
