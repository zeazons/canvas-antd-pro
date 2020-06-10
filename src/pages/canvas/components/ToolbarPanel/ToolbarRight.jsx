import React from 'react';
import { Col, Button, Space, Divider } from 'antd';

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
    <Space size={16}>
      <Col>
        <Button
          type="text"
          icon={<FontAwesomeIcon icon={faBorderNone} />}
          onClick={(event) => {
            onToolButtonClick(event, 'toggleFlowGuideline');
          }}
        />
      </Col>

      <Divider type="vertical" />

      <Col>
        <Button
          type="text"
          icon={<FontAwesomeIcon icon={faSearchMinus} />}
          onClick={(event) => {
            onToolButtonClick(event, 'zoomOutFlow');
          }}
        />
        <Button
          type="text"
          icon={<FontAwesomeIcon icon={faSearchPlus} />}
          onClick={(event) => {
            onToolButtonClick(event, 'zoomInFlow');
          }}
        />
        <Button
          type="text"
          icon={<FontAwesomeIcon icon={faCompress} />}
          onClick={(event) => {
            onToolButtonClick(event, 'zoomActualSize');
          }}
        />
        <Button
          type="text"
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
