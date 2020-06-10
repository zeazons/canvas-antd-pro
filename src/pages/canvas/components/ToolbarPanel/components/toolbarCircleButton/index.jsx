import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from "@material-ui/core/IconButton";

class ToolbarCircleButton extends Component {
  render() {
    const { children, disabled, size, color, onClick } = this.props;

    return (
      <button
        type="button"
        className="btn btn-circle btn-xl"
        size={size}
        color={color}
        onClick={onClick}
        disabled={disabled}

        // style={{ margin: "0 6px" }}
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

ToolbarCircleButton.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ToolbarCircleButton;
