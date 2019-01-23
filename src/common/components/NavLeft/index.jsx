import React from 'react';

import { Menu } from 'antd';

import menuConfig from '../../../mock/menuConfig';
import style from './index.module.less';

import logo from '../../assets/images/logo.svg';


function handleClick(e) {
  console.log('click', e);
}


export default class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({ menuList: menuConfig });
  }

  renderMenu = list => list.map((item) => {
    const { key, title, children } = item;

    if (Array.isArray(children)) {
      return (
        <Menu.SubMenu key={key} title={title}>
          { this.renderMenu(children) }
        </Menu.SubMenu>
      );
    }

    return <Menu.Item key={key}>{ title }</Menu.Item>;
  });

  render() {
    const { menuList } = this.state;

    return (
      <div className={style.container}>
        <div className={style.logo}>
          <img className={style.logo_img} src={logo} alt="" />
          <span className={style.logo_title}>React MS</span>
        </div>
        <Menu onClick={handleClick} className={style.menu} mode="vertical" theme="dark">
          { this.renderMenu(menuList) }
        </Menu>
      </div>
    );
  }
}
