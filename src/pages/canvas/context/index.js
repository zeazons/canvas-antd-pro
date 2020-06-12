import React, { useReducer, createContext } from 'react';

import * as Worker from '@/uiWorker';
export const CanvasContext = createContext();

export const CanvasContextConsumer = ({ children }) => {
  return <CanvasContext.Consumer>{(value) => children(value)}</CanvasContext.Consumer>;
};

export const CanvasContextProvider = (props) => {
  const { refs } = props;

  const initialState = {
    state: {
      isPropertiesShow: false,
    },
    events: {
      onNodeDblClick: (event, params) => {
        Worker.showProperties(refs, params);
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
