import React, { Component } from 'react';
import Sidebar from "./Components/Sidebar/Sidebar"

class App extends Component {
  render() {
    return (
      <div className="Main">
       <Sidebar />
      </div>
    );
  }
}

export default App;