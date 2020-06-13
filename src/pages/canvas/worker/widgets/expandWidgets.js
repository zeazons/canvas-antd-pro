export const expandWidgets = (refs, data) => {
  const { visibled } = data;

  refs.current[1].setVisible(visibled);
};
