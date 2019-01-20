import React from 'react';

import Child from './Child';

import cssStyle from './index.less';

console.log(cssStyle);

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  add() {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  }

  render() {
    const handleAdd = () => this.add();
    const { count } = this.state;

    return (
      <div className="content">
        <h1>React 生命周期介绍</h1>
        <button type="button" onClick={handleAdd}>点我</button>
        <p>{count}</p>
        <Child count={count} />
      </div>
    );
  }
}
