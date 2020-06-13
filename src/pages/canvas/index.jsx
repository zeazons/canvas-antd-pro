import React, { useEffect, useState, useContext, useRef, forwardRef } from 'react';
import { Button } from 'antd';

import * as UICommander from '@/uiCommander';
import * as Services from './services';
import * as NodeConstant from './constants/nodeConstant';

import { CanvasContext, CanvasContextProvider, CanvasContextConsumer } from './context';

import FlowPanel from './components/FlowPanel';
import WidgetsPanel from './components/WidgetsPanel';
import ToolbarPanel from './components/ToolbarPanel';
import PropertiesPanel from './components/PropertiesPanel';

import NoProperties from './components/properties/NoProperties';
import CodeProperties from './components/properties/CodeProperties';

import styles from './assets/less/style.less';

const renderProperties = (props, nodeData) => {
  switch (nodeData.nodeType) {
    case NodeConstant.NODE_TYPE_CODE:
      return (
        <CodeProperties
          {...props}
          nodeType={nodeData.nodeType}
          nodeId={nodeData.nodeId}
          nodeName={nodeData.nodeName}
          group={nodeData.group}
        />
      );

    default:
      return <NoProperties />;
  }
};

const propertirsPanelConfig = {
  width: 576,
};

const Canvas = (props) => {
  const [nodeProperties, setNodeProperties] = useState({});
  const [editor, setEditor] = useState({});

  const refs = useRef(Array.from({ length: 4 }, (objRef) => React.createRef()));

  const onWidgetsFilter = (event) => {
    const { editor } = refs.current[0].getData();
    let dataParams = {
      params: {
        data: {
          search: event.target.value,
        },
      },
    };

    Services.loadWidgets(refs, dataParams, editor);
  };

  useEffect(() => {
    setEditor(refs.current[0].getData());
  }, []);

  return (
    <CanvasContextProvider refs={refs}>
      <CanvasContextConsumer>
        {({ events } = context) => {
          return (
            <>
              <FlowPanel events={events} ref={(el) => (refs.current[0] = el)} />

              <WidgetsPanel
                className={styles.canvasWidgets}
                events={events}
                editor={editor}
                // onWidgetsFilter={onWidgetsFilter}
                ref={(el) => (refs.current[1] = el)}
              />

              <ToolbarPanel
                className={styles.canvasToolbar}
                events={events}
                ref={(el) => (refs.current[2] = el)}
              />

              <PropertiesPanel
                config={propertirsPanelConfig}
                events={events}
                ref={(el) => (refs.current[3] = el)}
              >
                {renderProperties(props, nodeProperties)}
              </PropertiesPanel>
            </>
          );
        }}
      </CanvasContextConsumer>
    </CanvasContextProvider>
  );
};

export default Canvas;
