import React from 'react';
import { Icon } from 'antd';

import DatetimeUtil from '../../utils/datetime.util';

import Weather from '../weather/weather';

import style from './header.module.less';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDatetime: DatetimeUtil.getCurrentDatetime(),
    };
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
        <div className={style.header_weather}>
          <span className={style.datetime}>{currentDatetime}</span>
          <Weather />
        </div>
        <div className={style.header_tool}>
          <span className={style.userInfo}>
            <Icon type="user" className={style.userInfo_icon} />
            <span className={style.userInfo_text}>{userName}</span>
          </span>
          <a href="#x" className={style.logout}>退出</a>
        </div>
        {/*
        <div className={style.header_tool}>
          <div className={style.breadcrumb}>
            <Breadcrumb className={style.antBreadcrumb}>
              <Breadcrumb.Item><a href="#1">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="#2">表单</a></Breadcrumb.Item>
              <Breadcrumb.Item>登陆</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={style.weather}>
            <span className={style.datetime}>{currentDatetime}</span>
            <Weather />
          </div>
        </div>
        */}
      </div>
    );
  }
}
