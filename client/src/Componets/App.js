import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tables from './Tables';
import Headers from './Headers';
import Nav from './Nav';
import SignUp from './SignUp';
import { AuthProvider } from "../contexts/AuthContext"
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <div className="d-flex align-items-center justify-content-center" style={{ maxWidth: "480px" }}>
        <SignUp />
      </div>
      {/* <Nav /> */}
      <Headers />
      <Tables />

    </div>
    </AuthProvider>
  );
}

export default App;
