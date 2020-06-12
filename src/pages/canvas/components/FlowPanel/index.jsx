import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  useContext,
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

const FlowPanel = forwardRef(({ events }, ref) => {
  // console.log('ref: ', ref);

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
    toggleFlowGuideline() {
      const { editor } = flowState;
      Events.onToggleFlowGuideline(editor);
    },
    zoomOutFlow() {
      const { editor } = flowState;
      Events.onZoomOutFlow(editor);
    },
    zoomInFlow() {
      const { editor } = flowState;
      Events.onZoomInFlow(editor);
    },
    zoomActualSize() {
      const { editor } = flowState;
      Events.onZoomActualSize(editor);
    },
    zoomFitSize() {
      const { editor } = flowState;
      Events.onZoomFitSize(editor);
    },
  }));

  useEffect(() => {
    const extraParams = {
      // username: 'Ronaldo',
      // canvasId: '250',
    };

    events.setFlowState = setFlowState;
    Events.onInitailFlow(refs, extraParams, events);
  }, []);

  return (
    <div className="flow-container">
      <div className={styles.graphContainer} ref={(el) => (refs.current[0] = el)}></div>
      <div
        // className="outline-container"
        className={styles.outlineContainer}
        ref={(el) => (refs.current[1] = el)}
      ></div>
      <div className="node-counter-container">
        <p className="badge badge-pill badge-success"></p>
      </div>
    </div>
  );
});

export default FlowPanel;
