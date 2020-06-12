import React, { useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

const Footer = forwardRef(({ label, type, htmlType, block, onSubmit } = props, ref) => {
  useImperativeHandle(ref, () => ({}));

  return (
    <Button type={type} htmlType={htmlType} block={block} onClick={onSubmit}>
      {label}
    </Button>
  );
});

Footer.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  htmlType: PropTypes.string,
  block: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Footer.defaultProps = {
  label: 'Done',
  type: 'primary',
  htmlType: 'button',
  block: true,
  onSubmit: () => {
    // console.log("click");
  },
};

export default Footer;
