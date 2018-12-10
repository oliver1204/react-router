import React, { Component } from 'react';
import { render } from 'react-dom';
import catp from './cat.jpeg'

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={ catp } style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

        {this.props.children(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse>
					{
						state => (
							<Cat mouse={state}/>
						)
					}
				</Mouse>
       
      </div>
    );
  }
}

render(<MouseTracker></MouseTracker>, window.root);

