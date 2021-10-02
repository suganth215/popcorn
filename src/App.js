import './App.css';
import Box from './components/box';
import { Component } from 'react';
import NavBar from './components/navbar';
import unirest from 'unirest';
class App extends Component{

  render()
  {
    document.body.style = 'background: #000000';
  return (
    <div className="App">
      <NavBar/>
      <Box/>
    </div>
  );
}
}

export default App;
