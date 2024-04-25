import * as React from 'react';
import MainImage from '../components/Image/image';
import image from '../images/a1.jpg';
import map from '../images/map.png';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';


export default function Map() {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
        setTimeout(() => {
            setState({...state, open: false});
        }, 3000);
    };
    return (
        <>

            <div className="account">
                <MainImage imageProp={image}></MainImage>
                <div className="container">
                    <div className='ui-dashboard'>
                        <Button variant="contained" onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Updates</Button>
                        <Snackbar
                            anchorOrigin={{ vertical, horizontal }}
                            open={open}

                            message="The pool is closed for renovations"
                            key={vertical + horizontal}
                        />
                        <img src={map} alt='map' style={{ width: '100%', position: 'relative', 'z-index': '15', margin: '25px 0 0 0' }} />
                    </div>
                </div>
            </div>
        </>
    )
}