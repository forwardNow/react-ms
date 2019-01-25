import React from 'react';
import { Breadcrumb } from 'antd';

import style from './admin.module.less';

import Header from '../../common/components/header/header';
import Footer from '../../common/components/footer/footer';
import NavLeft from '../../common/components/nav-left/nav-left';

import Home from './home/home';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.page}>
        <div className={style.page_navLeft}>
          <NavLeft />
        </div>
        <div className={style.page_main}>
          <div className={style.header}>
            <Header />
            <Breadcrumb className={style.antBreadcrumb}>
              <Breadcrumb.Item><a href="#1">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="#2">表单</a></Breadcrumb.Item>
              <Breadcrumb.Item>登陆</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={style.main}>
            <Home />
          </div>
          <div className={style.footer}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
