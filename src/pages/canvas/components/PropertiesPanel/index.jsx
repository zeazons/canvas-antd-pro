import React, { forwardRef, useImperativeHandle, useState } from 'react';

import Modal from './modal';
import Drawer from './drawer';

import './assets/css/style.css';

const PropertiesPanel = forwardRef((props, ref) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [modalConfig, setModalConfig] = useState({});
  const [isDrawerShow, setIsDrawerShow] = useState(false);
  const [drawerConfig, setDrawerConfig] = useState({});
  const [nodeData, setNodeData] = useState({});

  const showModalHandle = (nodeData) => {
    setIsModalShow(true);
    setNodeData(nodeData);
  };

  const closeModalHandle = () => {
    setIsModalShow(false);
    setNodeData({});
  };

  const setDrawerSizeHandle = (size) => {
    setDrawerConfig({
      drawerConfig: { size: size },
    });
  };

  const showDrawerHandle = (nodeData) => {
    setIsDrawerShow(true);
    setNodeData(nodeData);
  };

  const closeDrawerHandle = () => {
    setIsDrawerShow(false);
    setNodeData({});
  };

  useImperativeHandle(ref, () => ({
    showModal(nodeData) {
      showModalHandle(nodeData);
    },
    closeModal() {
      closeModalHandle();
    },
    setDrawerSize(size) {
      setDrawerSizeHandle(size);
    },
    showDrawer(nodeData) {
      showDrawerHandle(nodeData);
    },
    closeDrawer() {
      closeDrawerHandle();
    },
  }));

  const { id, children } = props;

  return (
    <div className="properties-block" id={id || new Date().getTime().toString()} ref={ref}>
      <Modal
        title={nodeData.nodeType || 'Properties'}
        showModal={isModalShow}
        onCloseModalHandler={closeModalHandle}
        size={nodeData.propertySize}
      >
        {children}
      </Modal>
      <Drawer
        title={nodeData.nodeType}
        group={nodeData.group}
        icon={nodeData.icon}
        showDrawer={isDrawerShow}
        onCloseDrawerHandler={closeDrawerHandle}
        size={nodeData.propertySize || 'sm'}
        anchor="right"
        setDrawerSize={setDrawerSizeHandle}
      >
        {children}
        {/* {renderProperties(props, nodeData)} */}
      </Drawer>
    </div>
  );
});

export default PropertiesPanel;
