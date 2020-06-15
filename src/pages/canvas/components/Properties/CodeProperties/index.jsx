import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Tabs, Form, Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import Properties from './Properties';

const { TabPane } = Tabs;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const CodeProperties = forwardRef(({ config, events, children } = props, ref) => {
  const setValuesHandle = (data) => {
    console.log('setValuesHandle: ', data);
  };

  const getValuesHandle = (data) => {
    console.log('setValuesHandle: ', data);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const refs = useRef(Array.from({ length: 1 }, (objRef) => React.createRef()));

  useImperativeHandle(ref, () => ({
    getData() {
      return refs.current[0].getData();
    },
    // setValues(data) {
    //   setValuesHandle(data);
    // },
    // getValues(data) {
    //   getValuesHandle(data);
    // },
  }));

  return (
    <Tabs size="large" tabPosition="right">
      <TabPane tab={<FontAwesomeIcon icon={faTools} size="lg" />} key="1">
        {/* <Properties ref={propertiesRef} /> */}
        <Properties config={config} ref={(el) => (refs.current[0] = el)} />
      </TabPane>
      <TabPane tab={<FontAwesomeIcon icon={faInfoCircle} size="lg" />} key="2">
        informarion
      </TabPane>
    </Tabs>
  );
});

export default CodeProperties;
