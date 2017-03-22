import React, { Component } from 'react';
import { Link } from 'react-router';


class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/" >Home</Link>
      </div>
    );
  }
}

export default Nav;