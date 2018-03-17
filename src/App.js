import React, { Component } from 'react';

import DragList from './components/drag-list/DragList';

class App extends Component {
  state = {
    menuList: [
      {
        name: 'Главная'
      },
      {
        name: 'События'
      },
      {
        name: 'Контакты'
      },
      {
        name: 'Продукты'
      }
    ]
  }  

  render() {
    return (
      <div className="App">
        <DragList list={this.state.menuList}></DragList>
      </div>
    );
  }
}

export default App;
