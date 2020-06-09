export const lock = (ref, data, editor) => {
  const isReadOnly = data.flow || false;
  const graph = editor.graph;
  graph.setEnabled(!isReadOnly);
};
