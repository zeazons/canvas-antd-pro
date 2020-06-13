import React, { createContext } from 'react';

import * as UICommander from '@/uiCommander';
import * as Services from '../services';

import * as Events from '../events';

export const CanvasContext = createContext(null);

export const CanvasContextConsumer = ({ children }) => {
  return <CanvasContext.Consumer>{(value) => children(value)}</CanvasContext.Consumer>;
};

export const CanvasContextProvider = (props) => {
  const { refs } = props;

  const initialState = {
    events: {
      onCanvasLoad: () => {
        Events.onCanvasLoad(refs);
      },
      onCanvasSave: () => {
        Events.onCanvasSave(refs);
      },
      onNodeDblClick: (evt, cell) => {
        Events.onNodeDblClick(refs);
      },
      onWidgetsFilter: () => {
        Events.onWidgetsFilter(refs);
      },
      onToolButtonClick: (event, topic) => {
        Events.onToolButtonClick(refs, topic);
      },
      onSubmit: (event) => {
        console.log('onSubmit');
        console.log('event: ', event);
      },
    },

    properties: {},
  };

  return <CanvasContext.Provider value={initialState}>{props.children}</CanvasContext.Provider>;
};
