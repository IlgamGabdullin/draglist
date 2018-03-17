import React, { Component } from 'react';

class DragItem extends Component {
  state = {
    active: false,
    elem: null
  }

  handleMouseDown = () => {
    this.setState({active: true});
  }

  handleMouseUp = () => {
    this.setState({active: false});
  }

  handleMove = (event) => {
    if (this.state.active) {
    }
  }

  render() {
    return(
      <nav className={`navbar navbar-light bg-light justify-content-center border drag-item my-2 ${this.state.active ? 'active' : ''}`}
           onMouseDown={this.handleMouseDown} 
           onMouseUp={this.handleMouseUp}
           onMouseMove={this.handleMove.bind(this.event)}
           onMouseLeave={this.handleMouseUp}
           ref={(el) => this.elem = el}>
        <div className="navbar-brand mb-0">{this.props.children}</div>
      </nav>
    )
  }
}

export default DragItem;