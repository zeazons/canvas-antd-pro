import * as UICommander from '@/uiCommander';

export const onNodeDblClick = (refs, data) => {
  const { editor } = refs.current[0].getData();
  const extraParams = {};
  extraParams.cell = cell;
  extraParams.editor = editor;

  UICommander.showProperties(refs, extraParams);
};
