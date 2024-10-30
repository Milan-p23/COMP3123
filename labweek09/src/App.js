import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome 
          course="Full Stack Development I"
          labTitle="React JS Programming Week09 Lab exercise"
          studentId="101397631"
          name="Milan Patel"
          college="George Brown College, Toronto"
          
        />
       
      </header>
    </div>
  );
}

export default App;
