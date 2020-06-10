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

        <Button
          shape="circle"
          icon={<FontAwesomeIcon icon={faFolderOpen} />}
          size="large"
          onClick={(event) => {
            onToolButtonClick(event, 'loadFlow');
          }}
        />
        <Button
          shape="circle"
          icon={<FontAwesomeIcon icon={faEdit} />}
          size="large"
          onClick={(event) => {
            onToolButtonClick(event, 'editFlow');
          }}
        />
        <Button
          shape="circle"
          icon={<FontAwesomeIcon icon={faSave} />}
          size="large"
          onClick={(event) => {
            onToolButtonClick(event, 'saveFlow');
          }}
        />

        <Space size={8}>
          <Col>
            <Button
              icon={<FontAwesomeIcon icon={faCheckCircle} />}
              onClick={(event) => {
                onToolButtonClick(event, 'commitFlow');
              }}
            />
            <Button
              icon={<FontAwesomeIcon icon={faHistory} />}
              onClick={(event) => {
                onToolButtonClick(event, 'discardFlow');
              }}
            />
            <Button
              icon={<FontAwesomeIcon icon={faTimesCircle} />}
              onClick={(event) => {
                onToolButtonClick(event, 'closeFlow');
              }}
            />
          </Col>
          <Col>
            <Button
              icon={<FontAwesomeIcon icon={faUndoAlt} />}
              onClick={(event) => {
                onToolButtonClick(event, 'undoFlow');
              }}
            />
            <Button
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
