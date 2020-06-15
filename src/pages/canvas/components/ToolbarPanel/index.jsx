import React, {
  Fragment,
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
  faCheckCircle,
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

const icons = [
  faMinus,
  faPlus,
  faFolderOpen,
  faEdit,
  faSave,
  faCheckCircle,
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
  const [tools, setTools] = useState([]);
  const [isExpand, setIsExpand] = useState(true);

  const { onToolButtonClick } = events;

  useImperativeHandle(ref, () => ({
    setData(data) {
      setTools(data);
    },
    collapse() {
      setIsExpand(false);
    },
    expand() {
      setIsExpand(true);
    },
  }));

  const toolsLeft = tools.filter((item, i) => {
    return i < 10;
  });

  const toolsRight = tools.filter((item, i) => {
    return i >= 10;
  });

  return (
    <div className={styles.canvasToolbar} ref={ref}>
      <Row justify="space-between" align="middle">
        <Col>
          {toolsLeft.map((item, i) => {
            if (i === 0) {
              return (
                <Fragment key={`${i}`}>
                  {item.visibled && isExpand && (
                    <>
                      <Tooltip title={item.button} key={`tooltip_${item.button}`}>
                        <Button
                          type="text"
                          icon={<FontAwesomeIcon icon={icons[i]} />}
                          onClick={(event) => onToolButtonClick(event, item.button)}
                          key={`${item.button}`}
                        />
                      </Tooltip>
                      <Divider type="vertical" key={`divider_${i}`} />
                    </>
                  )}
                </Fragment>
              );
            } else if (i === 1) {
              return (
                <Fragment key={`${i}`}>
                  {item.visibled && !isExpand && (
                    <>
                      <Tooltip title={item.button} key={`tooltip_${item.button}`}>
                        <Button
                          type="text"
                          icon={<FontAwesomeIcon icon={icons[i]} />}
                          onClick={(event) => onToolButtonClick(event, item.button)}
                          key={`${item.button}`}
                        />
                      </Tooltip>
                      <Divider type="vertical" key={`divider_${i}`} />
                    </>
                  )}
                </Fragment>
              );
            } else if (i === 2 || i === 5 || i === 8) {
              return (
                <Fragment key={`${i}`}>
                  {item.visibled && (
                    <>
                      <Divider type="vertical" key={`divider_${i}`} />
                      <Tooltip title={item.button} key={`tooltip_${item.button}`}>
                        <Button
                          type="text"
                          icon={<FontAwesomeIcon icon={icons[i]} />}
                          onClick={(event) => onToolButtonClick(event, item.button)}
                          key={`${item.button}`}
                        />
                      </Tooltip>
                    </>
                  )}
                </Fragment>
              );
            } else {
              return (
                <Fragment key={`${i}`}>
                  {item.visibled && (
                    <Tooltip title={item.button} key={`tooltip_${item.button}`}>
                      <Button
                        type="text"
                        icon={<FontAwesomeIcon icon={icons[i]} />}
                        onClick={(event) => onToolButtonClick(event, item.button)}
                        key={`${item.button}`}
                      />
                    </Tooltip>
                  )}
                </Fragment>
              );
            }
          })}
        </Col>
        <Col>
          {toolsRight.map((item, i) => {
            if (i === 1) {
              return (
                <Fragment key={`${i}`}>
                  <Divider type="vertical" key={`divider_${i + 10}`} />
                  {item.visibled && (
                    <Tooltip title={item.button} key={`${item.button}`}>
                      <Button
                        type="text"
                        icon={<FontAwesomeIcon icon={icons[i + 10]} />}
                        onClick={(event) => onToolButtonClick(event, item.button)}
                      />
                    </Tooltip>
                  )}
                </Fragment>
              );
            } else {
              return (
                <Fragment key={`${i}`}>
                  {item.visibled && (
                    <Tooltip title={item.button} key={`${item.button}`}>
                      <Button
                        type="text"
                        icon={<FontAwesomeIcon icon={icons[i + 10]} />}
                        onClick={(event) => onToolButtonClick(event, item.button)}
                      />
                    </Tooltip>
                  )}
                </Fragment>
              );
            }
          })}
        </Col>
      </Row>
    </div>
  );
});

export default ToolbarPanel;
