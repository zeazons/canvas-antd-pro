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
          <Row justify="start" align="middle" gutter={[8, 8]} className={styles.widgetItem} key={i}>
            <Col offset={1}>
              <Icon src={item.icon} data={item} editor={editor} />
            </Col>

            <Col offset={1}>
              <Description title={item.nodeName} />
            </Col>
          </Row>
        );
      })}
  </div>
));

export default WidgetsItem;
