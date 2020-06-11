import React, { forwardRef } from 'react';
import { Form, Input } from 'antd';
import 'antd/dist/antd.css';

const { TextArea } = Input;

const TextAreaWithLabel = forwardRef((props, ref) => {
  const {
    label,
    id,
    name,
    autoFocus,
    placeholder,
    value,
    size,
    rows,
    maxLength,
    disabled,
    readOnly,
    prefix,
    suffix,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    allowClear,
    rules,
  } = props;

  return (
    <Form.Item label={label} name={name} rules={rules} ref={ref}>
      <TextArea
        id={id}
        autoFocus={autoFocus}
        placeholder={placeholder}
        // value={value}
        size={size}
        rows={rows}
        maxLength={maxLength}
        disabled={disabled || false}
        readOnly={readOnly}
        defaultValue={value}
        prefix={prefix}
        suffix={suffix}
        onChange={onChange}
        onPressEnter={onPressEnter}
        allowClear={allowClear || true}
      />
    </Form.Item>
  );
});

export default TextAreaWithLabel;
