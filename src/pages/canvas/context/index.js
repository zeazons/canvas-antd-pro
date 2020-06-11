import React, { useReducer, createContext } from 'react';

export const CanvasContext = createContext();

const initialState = {
  state: {
    isPropertiesShow: false,
  },
  events: [
    {
      onNodeDblClick: (event, params) => {
        console.log('onNodeDblClick');
        console.log('event: ', event);
        console.log('params: ', params);
      },
    },
  ],
  properties: {},
};

export const CanvasContextProvider = (props) => {
  return <CanvasContext.Provider value={initialState}>{props.children}</CanvasContext.Provider>;
};
