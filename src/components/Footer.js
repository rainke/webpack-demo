import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
@connect()
class Footer extends Component {

  render() {
    const { dispatch } = this.props; 
    return (
      <div>
        <Link to="/">all</Link>,
        <Link to="/complete">completed</Link>,
        <Link to="/active">active</Link>
      </div>
    );
  }
};

export default Footer;

