import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Form, Button } from 'antd';

import TextAreaWithLabel from './components/form/TextAreaWithLabel';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const CodeProperties = forwardRef(({ config, events, children } = props, ref) => {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    getData() {
      return form.getFieldsValue();
    },
  }));

  useEffect(() => {
    form.setFieldsValue(config);
  }, [config]);

  return (
    <Form {...layout} name="basic" form={form}>
      <TextAreaWithLabel label="Code Editor" name="codeString" rows="8" focus />
    </Form>
  );
});

export default CodeProperties;
