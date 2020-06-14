import * as Services from '../../services';

export const onCanvasLoad = (refs, data) => {
  const { editor } = refs.current[0].getData();

  const requestParams = {
    params: {
      data: { ...data },
      // data: { username: 'Ronaldo', canvasId: '250' },
    },
  };

  Services.loadCanvas(refs, requestParams, editor);
};
