import React from 'react';

import { Input } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const WidgetsFilter = React.forwardRef((props, ref) => {
  const { events, placeholder } = props;
  const { onWidgetsFilter } = events;

  return (
    <div ref={ref}>
      <Input
        placeholder={placeholder || 'Filter Widgets..'}
        addonAfter={<FontAwesomeIcon icon={faFilter} />}
        defaultValue=""
        onKeyUp={(event) => onWidgetsFilter(event)}
        // onKeyUp={(event) => console.log('ref: ', ref)}
      />
      {/* <div>
      <div className="input-group input-group-sm">
        <input
          type="text"
          className="form-control input-filter-widgets"
          placeholder={placeholder || 'Filter Widgets..'}
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            <FontAwesomeIcon icon={faFilter} />
          </span>
        </div>
      </div>
    </div> */}
    </div>
  );
});

export default WidgetsFilter;
