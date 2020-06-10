import React from 'react';
import { Col, Button, Space } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBorderNone,
  faSearchMinus,
  faSearchPlus,
  faCompress,
  faExpand,
} from '@fortawesome/free-solid-svg-icons';

const ToolbarRightView = React.forwardRef(({ id, height, onToolButtonClick } = props, ref) => (
  <div
    className="actionbar-right"
    style={{ height: `${height}px` }}
    id={id || new Date().getTime().toString()}
    ref={ref}
  >
    <Space size={8}>
      <Col>
        <Button
          icon={<FontAwesomeIcon icon={faBorderNone} />}
          onClick={(event) => {
            onToolButtonClick(event, 'toggleFlowGuideline');
          }}
        />
      </Col>
      <Col>
        <Button
          icon={<FontAwesomeIcon icon={faSearchMinus} />}
          onClick={(event) => {
            onToolButtonClick(event, 'zoomOutFlow');
          }}
        />
        <Button
          icon={<FontAwesomeIcon icon={faSearchPlus} />}
          onClick={(event) => {
            onToolButtonClick(event, 'zoomInFlow');
          }}
        />
        <Button
          icon={<FontAwesomeIcon icon={faCompress} />}
          onClick={(event) => {
            onToolButtonClick(event, 'zoomActualSize');
          }}
        />
        <Button
          icon={<FontAwesomeIcon icon={faExpand} />}
          onClick={(event) => {
            onToolButtonClick(event, 'zoomFitSize');
          }}
        />
      </Col>
    </Space>
  </div>
));

export default ToolbarRightView;
