import React, { useEffect, useRef, forwardRef } from 'react';
import { addRule } from './service';

import FlowPanel from './components/FlowPanel';
import WidgetsPanel from './components/WidgetsPanel';
import ToolbarPanel from './components/ToolbarPanel';
import PropertiesPanel from './components/PropertiesPanel';

const Canvas = forwardRef((props, ref) => {
  const refs = useRef(Array.from({ length: 4 }, (objRef) => React.createRef()));

  return (
    <>
      <button
        onClick={(e) => {
          const dataParams = {
            params: {
              data: { username: 'Ronaldo', canvasId: '250' },
            },
          };
          addRule(dataParams);
        }}
      >
        loadCanvas
      </button>

      <FlowPanel ref={(el) => (refs.current[0] = el)} />
      <WidgetsPanel ref={(el) => (refs.current[1] = el)} />
      <ToolbarPanel ref={(el) => (refs.current[2] = el)} />
      <PropertiesPanel ref={(el) => (refs.current[3] = el)} />
    </>
  );
});

export default Canvas;
