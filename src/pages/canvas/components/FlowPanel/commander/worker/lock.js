export const lock = (editor, isLock) => {
  const { graph } = editor;
  graph.setEnabled(!isLock);
};
