// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import MainMenu from './components/MainMenu/MainMenu';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Home from './pages/home';
import Map from './pages/map';
import Menu from './pages/menu';
import Account from './pages/account';



function App() {
  const [ toLoad, setToLoad] = useState(<Home></Home>);
  

  return (
    <div className="App">
      {toLoad}
      <ButtonGroup variant="outlined" aria-label="Basic button group" className="buttonGroup" >
        <div className="childrenButtons">
          <Button onClick={()=>setToLoad(<Home></Home>)}>Home</Button>
          <Button onClick={()=>setToLoad(<Map></Map>)}>Resort Map</Button>
          <Button onClick={()=>setToLoad(<Menu></Menu>)
          }>Menu</Button>
          <Button onClick={()=>setToLoad(<Account></Account>)}>Account</Button>
        </div>
      </ButtonGroup>
    </div>
  );
}

export default App;
