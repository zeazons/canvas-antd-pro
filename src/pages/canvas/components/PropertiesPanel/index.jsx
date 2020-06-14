import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import useMergeState from 'use-merge-value';

import { Drawer } from 'antd';

import Title from './components/Title';
import Footer from './components/Footer';

import NoProperties from '../properties/NoProperties';
import CodeProperties from '../properties/CodeProperties';

import * as NodeConstant from '../../constants/nodeConstant';

import styles from './assets/less/style.less';
const renderProperties = (value) => {
  switch (value.nodeType) {
    case NodeConstant.NODE_TYPE_CODE:
      return (
        <CodeProperties
        // config={{ ...value }}
        // {...value}
        // nodeType={value.nodeType}
        // nodeId={value.nodeId}
        // nodeName={value.nodeName}
        // // group={nodeData.group}
        />
      );

    default:
      return <NoProperties />;
  }
};
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
        // style={{ margin: 0, padding: 0 }}
      >
        {/* {children} */}
        <div className={styles.contentPropertiesPanel}>{renderProperties(value)}</div>
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
