import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import useMergeState from 'use-merge-value';

import { Drawer } from 'antd';

import Title from './components/Title';
import Footer from './components/Footer';

// const getWidth = (width) => {
//   let drawerWidth;
//   switch (width) {
//     case 'small':
//       drawerWidth = 576;
//       break;
//     case 'medium':
//       drawerWidth = 768;
//       break;
//     case 'large':
//       drawerWidth = 992;
//       break;

//     default:
//       drawerWidth = 576;
//       break;
//   }
//   return drawerWidth;
// };

const PropertiesPanel = forwardRef(({ config, events, children } = props, ref) => {
  // const { config, events, children } = props;
  const [value, setValue] = useMergeState({ width: 576 }, config);
  const [visible, setVisible] = useState(false);

  const { width } = value;

  const onDrawerClose = () => {
    setVisible(false);
  };

  useImperativeHandle(ref, () => ({
    getData() {},
    setData(data) {
      setValue({ ...value, ...data });
    },
    show() {
      setVisible(true);
    },
    close() {
      setVisible(false);
    },
  }));

  return (
    <>
      <Drawer
        title={<Title {...value} />}
        footer={<Footer {...value} {...events} />}
        placement="right"
        width={width}
        onClose={onDrawerClose}
        visible={visible}
      >
        {children}
      </Drawer>
    </>
  );
});

PropertiesPanel.propTypes = {
  config: PropTypes.object,
  events: PropTypes.object,
  children: PropTypes.node.isRequired,
};

PropertiesPanel.defaultProps = {
  children: <p>No Properties...</p>,
  width: 576,
};

export default PropertiesPanel;
