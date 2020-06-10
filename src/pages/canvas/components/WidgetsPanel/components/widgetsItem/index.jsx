import React, { Component } from 'react';

import { Row, Col } from 'antd';

import Icon from './icon';
import Description from './description';

import styles from '../../assets/less/style.less';

const WidgetsItem = React.forwardRef(({ data, editor } = props, ref) => (
  <div className="card w-100" ref={ref}>
    {data &&
      data.length > 0 &&
      data.map((item, i) => {
        // console.log("item: ", item);

        return (
          <Row justify="start" align="middle" gutter={16} className={styles.widgetItem}>
            <Col>
              <Icon src={item.icon} data={item} editor={editor} />
            </Col>

            <Col>
              <Description title={item.nodeName} />
            </Col>
          </Row>
        );
      })}
  </div>
));

export default WidgetsItem;
