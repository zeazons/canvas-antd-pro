import React, { useReducer, createContext } from 'react';

import * as Worker from '@/uiWorker';
export const CanvasContext = createContext();

export const CanvasContextProvider = (props) => {
  const { refs } = props;

  const initialState = {
    isPropertiesShow: false,
    onNodeDblClick: (event, params) => {
      Worker.showProperties(refs, params);
    },
  };

  return <CanvasContext.Provider value={initialState}>{props.children}</CanvasContext.Provider>;
};
