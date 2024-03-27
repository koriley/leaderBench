import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import './MainMenu.css';

export default function ButtonUsage() {
  return <ButtonGroup variant="outlined" aria-label="Basic button group" className="buttonGroup" >
    <div className="childrenButtons">
      <Button>Home</Button>
      <Button>Resort Map</Button>
      <Button>Menu</Button>
      <Button>Account</Button>
    </div>
  </ButtonGroup>
}