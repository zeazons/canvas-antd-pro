import React, { useEffect, useState, useContext, useRef, forwardRef } from 'react';

import { useParams } from 'react-router-dom';

import * as ValidationUtils from '@/common/utils/validationUtils';
import * as NodeConstant from './constants/nodeConstant';

import { CanvasContextProvider, CanvasContextConsumer } from './context';

import FlowPanel from './components/FlowPanel';
import WidgetsPanel from './components/WidgetsPanel';
import ToolbarPanel from './components/ToolbarPanel';
import PropertiesPanel from './components/PropertiesPanel';

import * as Events from './events';

import styles from './assets/less/style.less';

const propertirsPanelConfig = {
  width: 576,
};

const Canvas = (props) => {
  const [nodeProperties, setNodeProperties] = useState({});
  const [editor, setEditor] = useState({});

  const refs = useRef(Array.from({ length: 4 }, (objRef) => React.createRef()));

  const { dispatch, currentUser } = props;
  let { id } = useParams();

  useEffect(() => {
    setEditor(refs.current[0].getData());
    Events.onCanvasLoad(refs, { canvasId: id, username: 'Ronaldo' });
  }, []);

  return (
    <CanvasContextProvider value={{ canvasId: id, username: 'Ronaldo' }} refs={refs}>
      <CanvasContextConsumer>
        {({ events, username } = context) => {
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
                {/* {renderProperties(props, nodeProperties)} */}
              </PropertiesPanel>
            </>
          );
        }}
      </CanvasContextConsumer>
    </CanvasContextProvider>
  );
};

export default Canvas;
