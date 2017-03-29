import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
@withRouter
@connect()
class Footer extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <NavLink activeStyle={{ color: 'red' }} exact to="/">all</NavLink>,
        <NavLink activeStyle={{ color: 'red' }} to="/complete">completed</NavLink>,
        <NavLink activeStyle={{ color: 'red' }} to="/active">active</NavLink>
      </div>
    );
  }
};

export default Footer;

