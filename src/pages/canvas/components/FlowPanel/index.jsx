import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  createRef,
  forwardRef,
} from 'react';

import * as Events from './events';

import styles from './assets/less/style.less';

const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState);
  const setMergedState = (newState) =>
    setState((prevState) => Object.assign({}, prevState, newState));
  return [state, setMergedState];
};

const FlowPanel = forwardRef((props, ref) => {
  const { id } = props;

  const [flowState, setFlowState] = useMergeState({
    editor: {},
  });

  const refs = useRef(Array.from({ length: 4 }, (objRef) => createRef()));

  useImperativeHandle(ref, () => ({
    getData() {
      return flowState;
    },
    // setData(data) {
    //   setFlowState(data);
    // },
    readFlow(data) {
      const { editor } = flowState;
      Events.onReadFlow(refs.current[0], data, editor);
    },
    lock(data) {
      const { editor } = flowState;
      Events.onLock(refs.current[0], data, editor);
    },
  }));

  useEffect(() => {
    const extraParams = {
      username: 'Ronaldo',
      canvasId: '250',
    };
    Events.onInitailFlow(refs, extraParams, setFlowState);
  }, []);

  return (
    <div className="flow-container">
      <div
        className={styles.graphContainer}
        id={id || new Date().getTime().toString()}
        ref={(el) => (refs.current[0] = el)}
      ></div>
      <div
        id={`${id}OutlineFlow` || `${new Date().getTime().toString()}OutlineFlow`}
        // className="outline-container"
        className={styles.outlineContainer}
        ref={(el) => (refs.current[1] = el)}
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
