import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  createRef,
  forwardRef,
} from 'react';

import { Row, Col, Affix } from 'antd';

import WidgetsFilter from './components/widgetsFilter';
import Icon from './components/widgetsItem/icon';

import * as ValidationUtils from '@/common/utils/validationUtils';

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
  const [widgets, setWidgets] = useState([]);
  const [editor, setEditor] = useState({});
  const [visible, setVisible] = useState(false);

  const [widgetsState, setWidgetsState] = useMergeState({
    widgetsList: widgets,
    widgetsFilter: widgets,
    isWidgetsExpanded: true,
  });

  const nodeRef = React.createRef();

  useImperativeHandle(ref, () => ({
    setData(data, editor) {
      setEditor(editor);
      setWidgets(data);
    },
    setVisible(isVisible) {
      setVisible(isVisible);
    },
  }));

  const { isWidgetsExpanded, widgetsFilter } = widgetsState;

  return (
    <div className={styles.canvasWidgets}>
      {visible && (
        <>
          <Affix offsetTop={0}>
            <WidgetsFilter placeholder="Filter Widgets..." onFilter={onFilterNodeHandler} />
          </Affix>

          {widgets.map((item, i) => {
            return (
              <Row gutter={[16, 16]} key={`${item.nodeName}_${i}`} justify="start" align="middle">
                <Col span={5} offset={1}>
                  {!ValidationUtils.isEmpty(editor) && (
                    <Icon
                      src={item.icon}
                      data={item}
                      editor={editor}
                      ref={nodeRef}
                      key={`icon_${item.nodeType}`}
                    />
                  )}
                </Col>
                <Col span={18}>{item.nodeName}</Col>
              </Row>
            );
          })}
        </>
      )}
    </div>
  );
});

export default WidgetsPanel;
