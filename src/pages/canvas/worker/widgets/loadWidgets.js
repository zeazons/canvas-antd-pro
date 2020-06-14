import * as Services from '../../services';

export const loadWidgets = (refs, data, editor) => {
  let requestParams = {
    params: {
      data: {
        ...data,
      },
    },
  };

  Services.loadWidgets(refs, requestParams, editor);
};
