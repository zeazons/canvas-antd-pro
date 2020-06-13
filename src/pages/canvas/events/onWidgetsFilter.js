import * as Services from '../services';

export const onWidgetsFilter = (refs) => {
  console.log('onWidgetsFilter');

  const { editor } = refs.current[0].getData();
  let dataParams = {
    params: {
      data: {
        search: event.target.value,
      },
    },
  };

  Services.loadWidgets(refs, dataParams, editor);
};
