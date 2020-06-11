import React, { forwardRef, useState } from 'react';

import { Col, Button, Space, Divider } from 'antd';

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
            type="text"
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
            type="text"
            shape="circle"
            icon={<FontAwesomeIcon icon={faPlus} />}
            size="large"
            onClick={(event) => {
              setIsExpandWidgets(true);
              onToolButtonClick(event, 'expandWidgets');
            }}
          />
        )}

        <Divider type="vertical" />

        <Button
          type="text"
          shape="circle"
          icon={<FontAwesomeIcon icon={faFolderOpen} />}
          size="large"
          onClick={(event) => {
            onToolButtonClick(event, 'loadFlow');
          }}
        />
        <Button
          type="text"
          shape="circle"
          icon={<FontAwesomeIcon icon={faEdit} />}
          size="large"
          onClick={(event) => {
            onToolButtonClick(event, 'editFlow');
          }}
        />
        <Button
          type="text"
          shape="circle"
          icon={<FontAwesomeIcon icon={faSave} />}
          size="large"
          onClick={(event) => {
            onToolButtonClick(event, 'saveFlow');
          }}
        />

        <Divider type="vertical" />

        <Space size={16}>
          <Col>
            <Button
              type="text"
              icon={<FontAwesomeIcon icon={faCheckCircle} />}
              onClick={(event) => {
                onToolButtonClick(event, 'commitFlow');
              }}
            />
            <Button
              type="text"
              icon={<FontAwesomeIcon icon={faHistory} />}
              onClick={(event) => {
                onToolButtonClick(event, 'discardFlow');
              }}
            />
            <Button
              type="text"
              icon={<FontAwesomeIcon icon={faTimesCircle} />}
              onClick={(event) => {
                onToolButtonClick(event, 'closeFlow');
              }}
            />
          </Col>
          <Divider type="vertical" />
          <Col>
            <Button
              type="text"
              icon={<FontAwesomeIcon icon={faUndoAlt} />}
              onClick={(event) => {
                onToolButtonClick(event, 'undoFlow');
              }}
            />
            <Button
              type="text"
              icon={<FontAwesomeIcon icon={faRedoAlt} />}
              onClick={(event) => {
                onToolButtonClick(event, 'redoFlow');
              }}
            />
          </Col>
        </Space>
      </Space>
    </div>
  );
});

export default ToolbarLeftView;
