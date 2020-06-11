import React from 'react';

import './assets/css/style.css';

const NoProperties = React.forwardRef(({ id, height } = props, ref) => (
  <div className="no-properties">
    <p>No Properties.</p>
  </div>
));

export default NoProperties;
