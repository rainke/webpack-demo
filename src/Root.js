import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import App from './components/App';
import "./app.css";


const Root = ({store}) => (
 <Provider store={store}>
    <BrowserRouter>
      <div>
        {/*<NavLink activeStyle={{color: 'blue'}} to="/hello"> hello </NavLink>*/}
        <Route exact path="/:filter?" component={App} />
        {/*<Route path="/hello" render={() => (<div>hello</div> )} />*/}
      </div>
    </BrowserRouter>
 </Provider>
);

export default Root;