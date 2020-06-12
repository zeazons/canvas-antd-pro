export const toggleFlowGuideline = (editor) => {
  const { graph } = editor;
  graph.pageBreaksVisible = !graph.pageBreaksVisible;
  graph.sizeDidChange();
};
