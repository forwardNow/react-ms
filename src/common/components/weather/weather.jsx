import React from 'react';

import style from './weather.module.less';
import service from './weather.service';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        now: {
          text: 'N/A',
          code: '0',
          temperature: 'N/A',
        },
        location: {
          name: 'N/A',
        },
      },
    };
  }

  componentWillMount() {
    service.getCurrentWeather()
      .then(data => this.setState({ data }));
  }

  render() {
    const {
      data: {
        now, location,
      },
    } = this.state;

    return (
      <div className={style.weather}>
        <span className={style.weather_location}>{location.name}</span>
        <img className={style.weather_img} src={`/assets/images/weather/${now.code}.png`} alt={now.text} title={now.text} />
        <span className={style.weather_temperature}>
          {`${now.temperature} ℃`}
        </span>
      </div>
    );
  }
}
