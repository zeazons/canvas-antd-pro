import React from 'react';

const CanvasView = React.forwardRef(({ id } = props, ref) => (
  <div className="flow-container" ref={ref}>
    <div className="graph-container" id={id || new Date().getTime().toString()} ref={ref}></div>
    <div
      id={`${id}OutlineFlow` || `${new Date().getTime().toString()}OutlineFlow`}
      className="outline-container"
    ></div>
    <div
      id={`${id}NodeCounter` || `${new Date().getTime().toString()}NodeCounter`}
      className="node-counter-container"
    >
      <p
        id={`${id}NodeCount` || `${new Date().getTime().toString()}NodeCount`}
        className="badge badge-pill badge-success"
      ></p>
    </div>
  </div>
));

export default CanvasView;
