import React from 'react';
import ReactDOM from 'react-dom';

import { Consumer } from './context';

class Header extends React.Component {
  render () {
    return (
      <Title>Hello React Context API</Title>
    );
  }
}

class Title extends React.Component {
  render () {
    return (
      <Consumer>
        { 
					state => (
						<h1 style={{background: state.background, color: state.color}}>
							{ this.props.children }
						</h1>
					) 
				}
      </Consumer>
    );
  }
}

export { Header, Title };

{/* <Provider>
	<Header>
		<Title />
	</Header>
</Provider> */}