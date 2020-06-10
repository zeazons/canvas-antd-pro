import React, { forwardRef, useState } from 'react';

import { Col, Button, Space } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolderOpen,
  faEdit,
  faSave,
  faCheckCircle,
  faTimesCircle,
  faHistory,
  faUndoAlt,
  faRedoAlt,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

const ToolbarLeftView = forwardRef(({ id, onToolButtonClick } = props, ref) => {
  const [isExpandWidgets, setIsExpandWidgets] = useState(true);

  return (
    <div className="actionbar-left" id={id || new Date().getTime().toString()} ref={ref}>
      <Space size={8}>
        {isExpandWidgets ? (
          <Button
            shape="circle"
            icon={<FontAwesomeIcon icon={faMinus} />}
            size="large"
            onClick={(event) => {
              setIsExpandWidgets(false);
              onToolButtonClick(event, 'collapseWidgets');
            }}
          />
        ) : (
          <Button
            shape="circle"
            icon={<FontAwesomeIcon icon={faPlus} />}
            size="large"
            onClick={(event) => {
              setIsExpandWidgets(true);
              onToolButtonClick(event, 'expandWidgets');
            }}
          />
        )}

        <Button shape="circle" icon={<FontAwesomeIcon icon={faFolderOpen} />} size="large" />
        <Button shape="circle" icon={<FontAwesomeIcon icon={faEdit} />} size="large" />
        <Button shape="circle" icon={<FontAwesomeIcon icon={faSave} />} size="large" />

        <Space size={16}>
          <Col>
            <Button icon={<FontAwesomeIcon icon={faCheckCircle} />} />
            <Button icon={<FontAwesomeIcon icon={faHistory} />} />
            <Button icon={<FontAwesomeIcon icon={faTimesCircle} />} />
          </Col>
          <Col>
            <Button icon={<FontAwesomeIcon icon={faUndoAlt} />} />
            <Button icon={<FontAwesomeIcon icon={faRedoAlt} />} />
          </Col>
        </Space>
      </Space>
    </div>
  );
});

export default ToolbarLeftView;
