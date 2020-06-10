import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  createRef,
  forwardRef,
} from 'react';

import { Row, Col } from 'antd';

import styles from './assets/less/style.less';

import ToolbarLeft from './ToolbarLeft';
import ToolbarRight from './ToolbarRight';

const ToolbarPanel = forwardRef((props, ref) => {
  const refs = useRef(Array.from({ length: 2 }, (objRef) => createRef()));

  useImperativeHandle(ref, () => ({
    getEl() {
      return ref;
    },
    loadToolbarButton() {},
  }));

  return (
    <div className={styles.canvasToolbar} ref={ref}>
      <Row justify="space-between" align="middle">
        <Col>
          <ToolbarLeft {...props} ref={(el) => (refs.current[0] = el)} />
        </Col>
        <Col>
          <ToolbarRight {...props} ref={(el) => (refs.current[1] = el)} />
        </Col>
      </Row>
    </div>
  );
});

export default ToolbarPanel;
