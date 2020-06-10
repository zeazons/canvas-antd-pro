import React, { Component } from "react";
import PropTypes from "prop-types";

class ToolbarButton extends Component {
  render() {
    const { children, disabled, onClick } = this.props;
    return (
      <button
        type="button"
        className="btn btn-light btn-sm"
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  // Set default props
  static defaultProps = {
    children: null,
    disabled: false,
  };
}

ToolbarButton.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ToolbarButton;
