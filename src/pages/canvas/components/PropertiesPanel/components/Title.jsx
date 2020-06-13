import React, { useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Card, Avatar } from 'antd';
import Logo from '@/assets/logo.svg';

const { Meta } = Card;

const Title = forwardRef(({ icon, title, description } = props, ref) => {
  useImperativeHandle(ref, () => ({}));

  return (
    <Meta avatar={<Avatar shape="square" src={icon} />} title={title} description={description} />
  );
});

Title.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Title.defaultProps = {
  icon: Logo,
  title: 'Properties',
  description: '',
};

export default Title;
