import React, { Component } from "react";

import Icon from "./icon";
import Description from "./description";

const WidgetsItem = React.forwardRef(({ data, editor } = props, ref) => (
  <div className="card w-100" ref={ref}>
    {data &&
      data.length > 0 &&
      data.map((item, i) => {
        // console.log("item: ", item);

        return (
          <div
            className="row no-gutters align-items-center border widget-item"
            key={item.nodeId}
          >
            <div className="col-auto">
              {/* <Icon src={data.icon} data={data} editor={editor} /> */}
              <Icon src={item.icon} data={item} editor={editor} />
            </div>
            <div className="col align-items-center">
              {/* <Description title={data.nodeName} /> */}
              <Description title={item.nodeName} />
            </div>
          </div>
        );
      })}
  </div>
));

export default WidgetsItem;
