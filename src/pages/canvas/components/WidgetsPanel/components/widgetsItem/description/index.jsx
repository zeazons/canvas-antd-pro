import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const { title } = this.props;

    return (
      // <div className="card-body">
      // <h6 className="card-title">{title || ""}</h6>
      <div>
        <lable className="title">{title}</lable>
        {/* <p className="card-text">description.</p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p> */}
      </div>
    );
  }

  // Set default props
  static defaultProps = {
    title: '',
  };
}

Description.propTypes = {
  title: PropTypes.string,
};

export default Description;
