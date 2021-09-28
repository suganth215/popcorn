import './App.css';
import Box from './components/box';
import { Component } from 'react';
import NavBar from './components/navbar';
class App extends Component{

  render()
  {
    document.body.style = 'background: #ffc107';
  return (
    <div className="App">
      <NavBar/>
      <Box/>
    </div>
  );
}
}

export default App;
