import React, { useReducer, createContext } from 'react';

export const CanvasContext = createContext();

export const CanvasContextProvider = (props) => {
  const { refs } = props;

  const initialState = {
    isPropertiesShow: false,
    onNodeDblClick: (event, params) => {
      console.log('refs: ', refs);
      console.log('onNodeDblClick');
      console.log('event: ', event);
      console.log('params: ', params);
    },
  };

  return <CanvasContext.Provider value={initialState}>{props.children}</CanvasContext.Provider>;
};
