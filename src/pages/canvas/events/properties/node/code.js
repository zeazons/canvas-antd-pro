export const transformCodeNode = (data) => {
  const nodeProperty = {};
  nodeProperty.codeString = data.codeString;

  const dataTransform = { nodeId: data.nodeId, nodeProperty };

  return dataTransform;
};
