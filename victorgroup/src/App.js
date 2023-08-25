import Navbar from './components/Navbar';
import Home from './components/Home'
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
