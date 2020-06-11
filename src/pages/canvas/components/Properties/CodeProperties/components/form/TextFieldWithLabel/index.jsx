import React, { forwardRef } from 'react';
import { Form, Input } from 'antd';
import 'antd/dist/antd.css';

const TextWithLabel = forwardRef((props, ref) => {
  const {
    label,
    id,
    name,
    autoFocus,
    placeholder,
    value,
    size,
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
    addonAfter,
    addonBefore,
    rules,
  } = props;

  return (
    <Form.Item label={label} name={name} rules={rules} ref={ref}>
      <Input
        id={id}
        type="text"
        autoFocus={autoFocus}
        placeholder={placeholder}
        // value={value}
        size={size}
        maxLength={maxLength}
        disabled={disabled || false}
        readOnly={readOnly}
        defaultValue={value}
        prefix={prefix}
        suffix={suffix}
        onChange={onChange}
        onPressEnter={onPressEnter}
        allowClear={allowClear || true}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
      />
    </Form.Item>
  );
});

export default TextWithLabel;
