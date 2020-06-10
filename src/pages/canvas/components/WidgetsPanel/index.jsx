import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  createRef,
  forwardRef,
} from 'react';

import WidgetsFilter from './components/widgetsFilter';
import WidgetsList from './components/widgetsList';

import styles from './assets/less/style.less';

const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState);
  const setMergedState = (newState) =>
    setState((prevState) => Object.assign({}, prevState, newState));
  return [state, setMergedState];
};

const onFilterNodeHandler = (e) => {
  const filter = e.target.value.toUpperCase();

  const { widgetsList } = this.state;

  const newNodeList = widgetsList.filter((node) => {
    return node.nodeName.toUpperCase().indexOf(filter) > -1;
  });

  this.setState({
    widgetsFilter: newNodeList,
  });
};

const WidgetsPanel = forwardRef((props, ref) => {
  const { widgets } = props;
  const [widgetsState, setWidgetsState] = useMergeState({
    widgetsList: widgets,
    widgetsFilter: widgets,
    isWidgetsExpanded: true,
  });

  const refs = useRef(Array.from({ length: 3 }, (objRef) => createRef()));

  useImperativeHandle(ref, () => ({
    getEl() {
      return ref;
    },
    getChildEl() {
      return refs;
    },
  }));

  const { isWidgetsExpanded, widgetsFilter } = widgetsState;
  return (
    <div className={styles.canvasWidgets} {...props} ref={ref}>
      {isWidgetsExpanded && (
        <div
          className="widgets-panel"
          ref={(el) => (refs.current[0] = el)}
          style={{ display: 'none' }}
        >
          <WidgetsFilter
            placeholder="Filter Widgets..."
            onFilter={onFilterNodeHandler}
            ref={(el) => (refs.current[1] = el)}
            {...props}
          />
          <WidgetsList
            {...props}
            data={widgetsFilter}
            // id={`${id}NodeList`}
            ref={(el) => (refs.current[2] = el)}
          />
        </div>
      )}
    </div>
  );
});

export default WidgetsPanel;
