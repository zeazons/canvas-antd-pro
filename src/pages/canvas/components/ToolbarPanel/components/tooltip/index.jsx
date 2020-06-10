import React, { Component } from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";

class TooltipComponent extends Component {
  render() {
    const { children, title, placement } = this.props;

    return (
      <Tooltip title={title} placement={placement}>
        {children}
      </Tooltip>
    );
  }
  // Set default props
  static defaultProps = {
    title: "",
    placement: "top",
  };
}

TooltipComponent.propTypes = {
  title: PropTypes.string,
  placement: PropTypes.string,
};

export default TooltipComponent;
