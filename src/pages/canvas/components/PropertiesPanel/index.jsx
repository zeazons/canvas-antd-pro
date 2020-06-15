import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import useMergeState from 'use-merge-value';

import { Drawer } from 'antd';

import Title from './components/Title';
import Footer from './components/Footer';

import NoProperties from '../properties/NoProperties';
import CodeProperties from '../properties/CodeProperties';

import * as NodeConstant from '../../constants/nodeConstant';

import styles from './assets/less/style.less';
const renderProperties = (refs, value) => {
  const { title: nodeType, nodeProperty } = value;

  switch (nodeType) {
    case NodeConstant.NODE_TYPE_CODE:
      return (
        <CodeProperties
          config={{ ...nodeProperty }}
          ref={(el) => (refs.current[0] = el)}
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

const getNodeProperties = (refs, value) => {
  const { title: nodeType } = value;

  switch (nodeType) {
    case NodeConstant.NODE_TYPE_CODE:
      return { ...value, nodeProperty: refs.current[0].getData() };

    default:
      return { ...value };
  }
};

const PropertiesPanel = forwardRef(({ config, events, children } = props, ref) => {
  const [value, setValue] = useMergeState({ width: 576 }, config);
  const [visible, setVisible] = useState(false);

  const { width } = value;

  const onDrawerClose = () => {
    setVisible(false);
  };

  useImperativeHandle(ref, () => ({
    getData() {
      return getNodeProperties(refs, value);
    },
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

  const refs = useRef(Array.from({ length: 1 }, (objRef) => React.createRef()));

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
        <div className={styles.contentPropertiesPanel}>{renderProperties(refs, value)}</div>
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
