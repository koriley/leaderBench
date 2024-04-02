import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import './MainMenu.css';




export default function MainMenu() {

  let navigate = useNavigate();

  const routeChange = (newPath) => {
    let path = { newPath } || '../../pages/home.js';
    navigate(path);

  }
  return <ButtonGroup variant="outlined" aria-label="Basic button group" className="buttonGroup" >
    <div className="childrenButtons">
      <Button onClick={(event) => this.routeChange('../../pages/home.js')}>Home</Button>
      <Button onClick={(event) => this.routeChange('../../pages/map.js')}>Resort Map</Button>
      <Button>Menu</Button>
      <Button>Account</Button>
    </div>
  </ButtonGroup>
}