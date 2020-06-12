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

const ToolbarPanel = forwardRef(({ events } = props, ref) => {
  // console.log('props: ', props);

  const { onToolButtonClick } = events;
  const refs = useRef(Array.from({ length: 2 }, (objRef) => createRef()));

  // const onToolButtonClick = (event, data) => {
  //   if (props) {
  //     console.log('data: ', data);

  //     props.onToolButtonClick((event, data));
  //   }
  // };

  useImperativeHandle(ref, () => ({
    getEl() {
      return ref;
    },
    getChildEl() {
      return refs;
    },
    // loadToolbarButton() {
    //   loadToolbarButton();
    // },
  }));

  return (
    <div className={styles.canvasToolbar} ref={ref}>
      <Row justify="space-between" align="middle">
        <Col>
          <ToolbarLeft
            // {...props}
            onToolButtonClick={onToolButtonClick}
            ref={(el) => (refs.current[0] = el)}
          />
        </Col>
        <Col>
          <ToolbarRight
            onToolButtonClick={onToolButtonClick}
            // {...props}
            ref={(el) => (refs.current[1] = el)}
          />
        </Col>
      </Row>
    </div>
  );
});

export default ToolbarPanel;
