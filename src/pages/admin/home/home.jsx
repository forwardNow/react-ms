import React from 'react';

import style from './home.module.less';

export default class Home extends React.Component {
  state = {}

  render() {
    return (
      <div className={style.home}>
        <div>欢迎使用本系统！</div>
      </div>
    );
  }
}
