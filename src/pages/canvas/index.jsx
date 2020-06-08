import React, { useEffect } from 'react';
import { addRule } from './service';

const Canvas = () => {
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

      <h1>Canvas Page</h1>
    </>
  );
};

export default Canvas;
