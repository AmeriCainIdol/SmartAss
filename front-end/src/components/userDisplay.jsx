import React, { Component } from 'react';

export default class Users extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <tr>
        <td>{this.props.user.username}</td>
        <td>{this.props.user.averageWinRate}</td>
        <td>{this.props.user.wins}</td>
        <td>{this.props.user.losses}</td>
      </tr>
    ) 
  }
}