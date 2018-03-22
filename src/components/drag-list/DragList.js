import React, { Component } from 'react';
import './drag-list.css';
import shuffle from '../../utils/shuflle';

import DragItem from './DragItem';


class DragList extends Component {

  state = {
    list: [],
    positions: [0, 1, 2, 3]
  }
  
  componentDidMount() {
    const list = this.props.list.map((item, position) => {
      return {...item, position, elem: null}
    })
    this.setState({list})
  }

  changePosition = () => {
    const newPositions = shuffle(this.state.positions);
    let list = this.state.list.map((item, index) => {
      return {...item, position: newPositions[index]}
    })
    console.log(list)
    this.setState({list});
  }
  
  
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7">
            {this.state.list.map((item, index) => {
              console.log(item)
              const style = {
                transform: `translateY(${item.position * 74}px)`
              }
              return (
                <div className="drag-item-container" 
                     key={index}
                     onClick={this.changePosition}
                     style={style}>
                  <DragItem>{item.name}</DragItem>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default DragList