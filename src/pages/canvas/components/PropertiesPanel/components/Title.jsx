import React, { useImperativeHandle, forwardRef } from "react";
import PropTypes from "prop-types";

import { Card, Avatar } from "antd";

const { Meta } = Card;

const Title = forwardRef(({ icon, title, description } = props, ref) => {
  useImperativeHandle(ref, () => ({}));

  return (
    <Meta
      avatar={<Avatar src={icon} />}
      title={title}
      description={description}
    />
  );
});

Title.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

Title.defaultProps = {
  icon: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  title: "Properties",
  description: ""
};

export default Title;
