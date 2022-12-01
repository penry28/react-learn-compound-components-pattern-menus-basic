import Menu from "./components/Menu/Menu";
import MenuItem from './components/Menu/MenuItem';

function App() {
  return (
    <div className="App">
      <Menu defaultSelected="Logout">
        <MenuItem value="Profile">Profile</MenuItem>
        <MenuItem value="My account">My account</MenuItem>
        <MenuItem value="Logout">Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
