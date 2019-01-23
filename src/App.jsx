import React from 'react';
import { Row, Col } from 'antd';

import style from './App.module.less';

import Header from './common/components/Header';
import Footer from './common/components/Footer';
import NavLeft from './common/components/NavLeft';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row className={style.container}>
        <Col span={3} className={style.navLeft}>
          <NavLeft />
        </Col>
        <Col span={21} className={style.main}>
          <Header />
          <Row className={style.content}>
            内容区域
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
