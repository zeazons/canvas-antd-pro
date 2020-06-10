import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import WidgetsItem from '../components/widgetsItem';

export const loadWidgets = (refs, data, editor) => {
  console.log('loadWidgets: ');
  console.log('refs: ', refs);
  console.log('data: ', data);
  console.log('editor: ', editor);

  // const ref = refs.current[1].getChildEl();
  // const widgetsList = $(ref.current[2])[0];
  // const { widgets } = data;

  // const widgetsItem = <WidgetsItem data={widgets} editor={editor} />;

  // ReactDOM.render(widgetsItem, widgetsList);
};
