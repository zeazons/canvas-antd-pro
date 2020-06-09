export const lock = (refs, data, editor) => {
  const isReadOnly = data.flow || false;
  const { graph } = editor;
  graph.setEnabled(!isReadOnly);
};
