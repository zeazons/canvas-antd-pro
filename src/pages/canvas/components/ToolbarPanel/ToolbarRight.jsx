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

import ToolbarButton from './components/toolbarButton';

const ToolbarRightView = React.forwardRef(({ id, height } = props, ref) => (
  <div
    className="actionbar-right"
    style={{ height: `${height}px` }}
    id={id || new Date().getTime().toString()}
    ref={ref}
  >
    <Space size={16}>
      <Col>
        <Button icon={<FontAwesomeIcon icon={faBorderNone} />} />
      </Col>
      <Col>
        <Button icon={<FontAwesomeIcon icon={faSearchMinus} />} />
        <Button icon={<FontAwesomeIcon icon={faSearchPlus} />} />
        <Button icon={<FontAwesomeIcon icon={faCompress} />} />
        <Button icon={<FontAwesomeIcon icon={faExpand} />} />
      </Col>
    </Space>
  </div>
));

export default ToolbarRightView;
