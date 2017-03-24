import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './components/App';
import "./app.css";


const Root = ({store}) => (
 <Provider store={store}>
    <BrowserRouter>
      <div>
        {/*<Link to="/hello"> hello </Link>*/}
        <Route path="/:filter?" component={App} />
        {/*<Route path="/hello" render={() => (<div>hello</div> )} />*/}
      </div>
    </BrowserRouter>
 </Provider>
);

export default Root;