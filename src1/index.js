import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context';
import { Header } from './content';

// let Provider = React.createContext().Provider;

class App extends React.Component {
  render () {
    return (
      <Provider value={{background: '#5088e4', color: 'white'}}>
        <Header />
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
