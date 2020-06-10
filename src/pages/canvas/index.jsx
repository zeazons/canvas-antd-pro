import React, { useEffect, useRef, forwardRef } from 'react';
import { Button } from 'antd';

import { loadCanvas } from './service';

import FlowPanel from './components/FlowPanel';
import WidgetsPanel from './components/WidgetsPanel';
import ToolbarPanel from './components/ToolbarPanel';
import PropertiesPanel from './components/PropertiesPanel';

import styles from './assets/less/style.less';

const Canvas = forwardRef((props, ref) => {
  const refs = useRef(Array.from({ length: 4 }, (objRef) => React.createRef()));

  return (
    <>
      <Button
        onClick={() => {
          const { editor } = refs.current[0].getData();

          const dataParams = {
            params: {
              data: { username: 'Ronaldo', canvasId: '250' },
            },
          };
          loadCanvas(refs, dataParams, editor);
        }}
      >
        Load Canvas
      </Button>

      <FlowPanel ref={(el) => (refs.current[0] = el)} />
      <WidgetsPanel className={styles.canvasWidgets} ref={(el) => (refs.current[1] = el)} />
      <ToolbarPanel className={styles.canvasToolbar} ref={(el) => (refs.current[2] = el)} />
      <PropertiesPanel ref={(el) => (refs.current[3] = el)} />
    </>
  );
});

export default Canvas;
