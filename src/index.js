import React from 'react';
import ReactDOM from 'react-dom'
import storeConfigure from './storeConfigure';
import { AppContainer } from 'react-hot-loader'
import Root from './Root'
const root = document.getElementById('root');
const store = storeConfigure();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store}/>
    </AppContainer>,
    root
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./Root', () => { render(Root) });
}