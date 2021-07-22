import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';

function App() {
  return (
    <Router>
      <Topbar />
      {/*container defines the flexbox for sizing (flex 1 v 4) */}
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
