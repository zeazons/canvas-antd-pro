import * as Services from '../../services';

export const loadWidgets = (refs, data, editor) => {
  let dataParams = {
    params: {
      data: {
        ...data,
      },
    },
  };

  Services.loadWidgets(refs, dataParams, editor);
};
