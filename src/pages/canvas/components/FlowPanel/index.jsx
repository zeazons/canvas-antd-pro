import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { mxGraph, mxClient, mxUtils, mxEvent, mxCompactTreeLayout } from 'mxgraph-js';

import * as Events from './events';

function useMergeState(initialState) {
  const [state, setState] = useState(initialState);
  const setMergedState = (newState) =>
    setState((prevState) => Object.assign({}, prevState, newState));
  return [state, setMergedState];
}

const FlowPanel = forwardRef((props, ref) => {
  const { id } = props;
  const refs = useRef(Array.from({ length: 4 }, (objRef) => React.createRef()));

  const [flowState, setFlowState] = useMergeState({
    editor: {},
  });

  useImperativeHandle(ref, () => ({
    getData() {
      return flowState;
    },
    // setData(data) {
    //   setFlowState(data);
    // },
    readFlow(xmlFlow) {
      const { editor } = flowState;
      Events.readFlow(refs.current[0], xmlFlow, editor);
    },
    lock(data) {
      const { editor } = flowState;
      Events.lock(refs.current[0], data, editor);
    },
  }));

  useEffect(() => {
    const extraParams = {
      username: 'Ronaldo',
      canvasId: '250',
    };
    Events.initailFlow(refs.current[0], extraParams, setFlowState);
  }, []);

  return (
    <div className="flow-container" ref={(el) => (refs.current[0] = el)}>
      <div className="graph-container" id={id || new Date().getTime().toString()} ref={ref}></div>
      <div
        id={`${id}OutlineFlow` || `${new Date().getTime().toString()}OutlineFlow`}
        className="outline-container"
      ></div>
      <div
        id={`${id}NodeCounter` || `${new Date().getTime().toString()}NodeCounter`}
        className="node-counter-container"
      >
        <p
          id={`${id}NodeCount` || `${new Date().getTime().toString()}NodeCount`}
          className="badge badge-pill badge-success"
        ></p>
      </div>
    </div>
  );
});

export default FlowPanel;
