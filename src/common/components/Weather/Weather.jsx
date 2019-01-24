import React from 'react';

import style from './Weather.module.less';
import service from './Weather.service';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        now: {
          // text: '多云',
          // code: '4',
          // temperature: '12',
        },
        location: {
          // id: 'WT3Q0FW9ZJ3Q',
          // name: '武汉',
          // country: 'CN',
          // path: '武汉,武汉,湖北,中国',
          // timezone: 'Asia/Shanghai',
          // timezone_offset: '+08:00',
        },
      },
    };
  }

  componentWillMount() {
    service.getCurrentWeather().then(data => this.setState({ data }));
  }

  render() {
    const {
      data: {
        now, location,
      },
    } = this.state;

    return (
      <div className={style.weather}>
        <span>{location.name}</span>
        <img src={`/assets/images/weather/${now.code}.png`} alt={now.text} title={now.text} />
        <span>
          {now.temperature}
          ℃
        </span>
      </div>
    );
  }
}
