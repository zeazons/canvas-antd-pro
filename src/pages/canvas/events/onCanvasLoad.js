import * as Services from '../services';

export const onCanvasLoad = (refs) => {
  const { editor } = refs.current[0].getData();

  const dataParams = {
    params: {
      data: { username: 'Ronaldo', canvasId: '250' },
    },
  };
  Services.loadCanvas(refs, dataParams, editor);
};
