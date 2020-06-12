import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  createRef,
  forwardRef,
} from 'react';

import { Row, Col, Button, Tooltip, Space, Divider } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faFolderOpen,
  faEdit,
  faSave,
  // faCheckCircle,
  faHistory,
  faTimesCircle,
  faUndoAlt,
  faRedoAlt,
  faBorderNone,
  faSearchMinus,
  faSearchPlus,
  faCompress,
  faExpand,
} from '@fortawesome/free-solid-svg-icons';

import styles from './assets/less/style.less';

import ToolbarLeft from './ToolbarLeft';
import ToolbarRight from './ToolbarRight';

import * as Commander from './commander';

const buttons = [];
const icons = [
  faPlus,
  faMinus,
  faFolderOpen,
  faEdit,
  faSave,
  faHistory,
  faTimesCircle,
  faUndoAlt,
  faRedoAlt,
  faBorderNone,
  faSearchMinus,
  faSearchPlus,
  faCompress,
  faExpand,
];
const ToolbarPanel = forwardRef(({ events } = props, ref) => {
  // console.log('props: ', props);

  const [tools, setTools] = useState([]);

  const { onToolButtonClick } = events;
  const refs = useRef(Array.from({ length: 2 }, (objRef) => createRef()));

  // const onToolButtonClick = (event, data) => {
  //   if (props) {
  //     console.log('data: ', data);

  //     props.onToolButtonClick((event, data));
  //   }
  // };

  useImperativeHandle(ref, () => ({
    setTools(data) {
      setTools(data);
    },
  }));

  const toolsLeft = tools.filter((item, i) => {
    return i < 9;
  });

  const toolsRight = tools.filter((item, i) => {
    return i >= 9;
  });

  return (
    <div className={styles.canvasToolbar} ref={ref}>
      <Row justify="space-between" align="middle">
        <Col>
          {toolsLeft.map((item, i) => {
            if (i === 2 || i === 5 || i === 7) {
              return (
                <>
                  <Divider type="vertical" key={`divider_${i}`} />
                  {item.visibled && (
                    <Tooltip title={item.button}>
                      <Button
                        type="text"
                        icon={<FontAwesomeIcon icon={icons[i]} />}
                        onClick={(event) => onToolButtonClick(event, item.button)}
                        key={item.button}
                      />
                    </Tooltip>
                  )}
                </>
              );
            } else {
              return (
                <>
                  {item.visibled && (
                    <Tooltip title={item.button}>
                      <Button
                        type="text"
                        icon={<FontAwesomeIcon icon={icons[i]} />}
                        onClick={(event) => onToolButtonClick(event, item.button)}
                        key={item.button}
                      />
                    </Tooltip>
                  )}
                </>
              );
            }
          })}
        </Col>
        <Col>
          {toolsRight.map((item, i) => {
            if (i === 1) {
              return (
                <>
                  <Divider type="vertical" key={`divider_${i + 9}`} />
                  {item.visibled && (
                    <Tooltip title={item.button}>
                      <Button
                        type="text"
                        icon={<FontAwesomeIcon icon={icons[i + 9]} />}
                        onClick={(event) => onToolButtonClick(event, item.button)}
                      />
                    </Tooltip>
                  )}
                </>
              );
            } else {
              return (
                <>
                  {item.visibled && (
                    <Tooltip title={item.button}>
                      <Button
                        type="text"
                        icon={<FontAwesomeIcon icon={icons[i + 9]} />}
                        onClick={(event) => onToolButtonClick(event, item.button)}
                      />
                    </Tooltip>
                  )}
                </>
              );
            }
          })}
        </Col>
        {/* <Col>
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
        </Col> */}
      </Row>
    </div>
  );
});

export default ToolbarPanel;
