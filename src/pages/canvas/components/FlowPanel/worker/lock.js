export const lock = (refs, data) => {
  const isReadOnly = data.flow || false;
  const { editor } = refs.current[0].getData();
  const { graph } = editor;

  graph.setEnabled(!isReadOnly);
};
