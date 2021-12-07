import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tables from './Componets/Tables';
import Headers from './Componets/Headers';
import Nav from './Componets/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Headers />
      <Tables />

    </div>
  );
}

export default App;
