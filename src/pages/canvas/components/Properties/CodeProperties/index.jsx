import React, { forwardRef, useImperativeHandle } from 'react';
import { Form, Button } from 'antd';

import TextAreaWithLabel from './components/form/TextAreaWithLabel';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const CodeProperties = forwardRef((props, ref) => {
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

  useImperativeHandle(ref, () => ({
    setValues(data) {
      setValuesHandle(data);
    },
    getValues(data) {
      getValuesHandle(data);
    },
  }));

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        codeString: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <TextAreaWithLabel label="Code Editor" name="codeString" rows="8" />
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
});

export default CodeProperties;
