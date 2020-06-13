import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addNode } from '../../utils/widgetsUtils';

import styles from '../../assets/less/style.less';
class Icon extends Component {
  constructor(props) {
    super(props);

    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    const { editor, data } = this.props;
    if (editor) {
      addNode(this.nodeRef.current, editor.graph, data);
    }
  }

  render() {
    return <div className={styles.widgetIcon} ref={this.nodeRef} />;
  }

  // Set default props
  static defaultProps = {
    title: '',
  };
}

Icon.propTypes = {
  title: PropTypes.string,
};

export default Icon;
