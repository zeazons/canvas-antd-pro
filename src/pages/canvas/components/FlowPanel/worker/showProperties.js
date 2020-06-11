export const showProperties = (refs, data, callback) => {
  // refs.current.showModal({
  //   modalConfig: {
  //     size: "sm",
  //   },
  //   nodeData: {
  //     nodeType: "decision",
  //   },
  // });

  const nodeData = {
    group: 'etc.',
    size: 'sm',
    ...data.cell,
  };

  console.log('refs: ', refs.current);

  // refs.current[3].showDrawer(nodeData);

  // callback.setNodeProperties(nodeData);

  // refs.current.showDrawer({
  //   drawerConfig: {
  //     anchor: "right",
  //     propertySize: "lg",
  //   },
  //   nodeData: nodeData,
  // });
};
