import React, { forwardRef } from 'react';
import { Form, Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

const DropdownWithLabel = forwardRef((props, ref) => {
  const {
    label,
    id,
    name,
    placeholder,
    value,
    size,
    options,
    maxLength,
    autoFocus,
    disabled,
    readOnly,
    showSearch,
    allowClear,
    onChange,
    onFocus,
    onBlur,
    onSearch,
    rules,
  } = props;

  return (
    <Form.Item label={label} name={name} rules={rules} ref={ref}>
      <Select
        id={id}
        defaultValue={value}
        showSearch={showSearch || true}
        placeholder={placeholder}
        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readOnly}
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        allowClear={allowClear || true}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {options.map((item) => (
          <Option key={item.key} value={item.value}>
            {item.text}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
});

export default DropdownWithLabel;
