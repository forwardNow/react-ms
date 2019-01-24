import React from 'react';
import {
  Icon, Row, Col, Breadcrumb,
} from 'antd';

import DatetimeUtil from '../../utils/datetime.util';

import Weather from '../Weather/Weather';

import style from './Header.module.less';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({ userName: '张三' });

    window.setInterval(
      () => this.setState({ currentDatetime: DatetimeUtil.getCurrentDatetime() }),
      1000,
    );
  }

  //
  // componentDidMount() {
  //   this.renderWeather();
  // }
  //

  render() {
    const {
      userName,
      currentDatetime,
    } = this.state;

    return (
      <div className={style.header}>
        <Row className={style.header_topBar}>
          <Col span={24}>
            <span className={style.userInfo}>
              <Icon type="user" className={style.userInfo_icon} />
              <span className={style.userInfo_text}>{userName}</span>
            </span>
            <a href="#x" className={style.logout}>退出</a>
          </Col>
        </Row>
        <Row className={style.header_tool}>
          <Col span={12} className={style.breadcrumb}>
            <Breadcrumb className={style['ant-breadcrumb']}>
              <Breadcrumb.Item><a href="#1">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="#2">表单</a></Breadcrumb.Item>
              <Breadcrumb.Item>登陆</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={12} className={style.others}>
            <span className={style.datetime}>{currentDatetime}</span>
            <Weather />
          </Col>
        </Row>
      </div>
    );
  }
}
