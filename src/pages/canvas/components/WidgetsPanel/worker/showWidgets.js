import ReactDOM from 'react-dom';
import React from 'react';

import WidgetsItem from '../components/widgetsItem';

export const showWidgets = (refs, data, editor) => {
  const ref = refs.current[1].getChildEl();
  const widgetsList = ref.current[2];
  const { widgets } = data;

  const widgetsItem = <WidgetsItem data={widgets} editor={editor} />;

  ReactDOM.render(widgetsItem, widgetsList);
};
