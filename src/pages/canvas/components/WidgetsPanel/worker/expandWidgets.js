import $ from 'jquery';

export const expandWidgets = (refs, data) => {
  const ref = refs.current[1].getChildEl();
  const widgetsPanel = $(ref.current[0])[0];

  if (data.visibled) {
    $(widgetsPanel).show();
  } else {
    $(widgetsPanel).hide();
  }
};
