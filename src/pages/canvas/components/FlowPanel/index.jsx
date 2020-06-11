import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  useContext,
  createRef,
  forwardRef,
} from 'react';

import { CanvasContext } from '../../context';
import * as Events from './events';

import styles from './assets/less/style.less';

const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState);
  const setMergedState = (newState) =>
    setState((prevState) => Object.assign({}, prevState, newState));
  return [state, setMergedState];
};

const FlowPanel = forwardRef((props, ref) => {
  // console.log('ref: ', ref);

  const context = useContext(CanvasContext);

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

    const events = context.events;
    events.push({ setFlowState: setFlowState });
    Events.onInitailFlow(refs, extraParams, events);
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
