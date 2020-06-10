import React from 'react';

import styles from '../../assets/less/style.less';

const WidgetsList = React.forwardRef((props, ref) => (
  <div className={styles.widgetsList} ref={ref} style={{ height: `${props.height}px` }}>
    <div
      className="row list-node"
      id={props.id || new Date().getTime().toString()}
      style={{ height: `${props.height}px` }}
    >
      {/* <WidgetsItem {...props} ref={ref} /> */}
    </div>
  </div>
));

export default WidgetsList;
