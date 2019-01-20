import React from 'react';
import PropTypes from 'prop-types';

export default class Child extends React.Component {
  static propTypes = {
    count: PropTypes.number,
  };

  static defaultProps = {
    count: 0,
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    console.log('componentWillMount()');
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  componentWillReceiveProps(newProp) {
    console.log(`componentWillReceiveProps(${JSON.stringify(newProp)})`);
  }

  shouldComponentUpdate() {
    const isUpdate = Date.now() % 2 === 1;
    console.log(`shouldComponentUpdate(), return ${isUpdate}`);
    return isUpdate;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate()');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  render() {
    const { count } = this.props;

    return (
      <div>
        子组件接收到的值：
        {count}
      </div>
    );
  }
}
