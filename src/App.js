import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="container">
        <Sidebar />
        <div className="others">other</div>
      </div>
    </div>
  );
}

export default App;
