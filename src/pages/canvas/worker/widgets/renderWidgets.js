export const renderWidgets = (refs, data) => {
  const { widgets } = data;

  const { editor } = refs.current[0].getData();

  refs.current[1].setData(widgets, editor);
};
