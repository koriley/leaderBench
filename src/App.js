// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './components/MainMenu/MainMenu.css';
import ButtonGroup from '@mui/material/ButtonGroup';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Button from '@mui/material/Button';
import Home from './pages/home';
import Map from './pages/map';
import Menu from './pages/menu';
import Account from './pages/account';


import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnIcon from '@mui/icons-material/LocationOn';



function App() {
  const [toLoad, setToLoad] = useState(<Home></Home>);
  const [value, setValue] = useState('recents');
  const [label, setLabel] = useState('Recents')

  const handleChange = (event, newLabel) => {
    setValue(newLabel);
  };

  return (
    <div className="App">
      {toLoad}
      {/* <ButtonGroup size='secondary' variant="outlined" aria-label="Basic button group" className="buttonGroup" >
        <div className="childrenButtons">
          <Button onClick={()=>setToLoad(<Home></Home>)}>Home</Button>
          <Button onClick={()=>setToLoad(<Map></Map>)}>Resort Map</Button>
          <Button onClick={()=>setToLoad(<Menu></Menu>)
          }>Food</Button>
          <Button onClick={()=>setToLoad(<Account></Account>)}>Account</Button>
        </div>
      </ButtonGroup> */}
      <BottomNavigation  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:15 }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
          onClick={()=>setToLoad(<Home></Home>)}
        />
        <BottomNavigationAction
          label="Map"
          value="map"
          icon={<LocationOnIcon />}
          onClick={()=>setToLoad(<Map></Map>)}
        />
        <BottomNavigationAction
          label="Menu"
          value="menu"
          icon={<RestaurantMenuIcon />}
          onClick={()=>setToLoad(<Menu></Menu>)}
        />
        <BottomNavigationAction
          label="Account"
          value="account"
          icon={<AccountBoxIcon />}
          onClick={()=>setToLoad(<Account></Account>)}
          />

      </BottomNavigation>
    </div>
  );
}

export default App;
