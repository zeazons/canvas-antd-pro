import React, { useEffect, createContext } from 'react';
import { connect } from 'umi';

import * as Events from '../events';

export const CanvasContext = createContext(null);

export const CanvasContextConsumer = ({ children }) => {
  return <CanvasContext.Consumer>{(value) => children(value)}</CanvasContext.Consumer>;
};

export const CanvasContextProvider = (props) => {
  const { refs, value } = props;

  const { dispatch } = value;

  // if (dispatch) {
  //   dispatch({
  //     type: 'user/fetchCurrent',
  //   });
  // }

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }

    // setEditor(refs.current[0].getData());
  }, []);

  // console.log('currentUser: ', currentUser);

  const initialState = {
    events: {
      onCanvasLoad: () => {
        Events.onCanvasLoad(refs, value);
      },
      onCanvasSave: () => {
        Events.onCanvasSave(refs, value);
      },
      onNodeDblClick: (evt, cell) => {
        Events.onNodeDblClick(refs, value, cell);
      },
      onWidgetsFilter: () => {
        Events.onWidgetsFilter(refs, value);
      },
      onToolButtonClick: (event, topic) => {
        Events.onToolButtonClick(refs, value, topic);
      },
      onSubmit: (event) => {
        Events.onPropertySave(refs, value);
      },
    },

    properties: {},
  };

  return <CanvasContext.Provider value={initialState}>{props.children}</CanvasContext.Provider>;
};

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(CanvasContextProvider);
