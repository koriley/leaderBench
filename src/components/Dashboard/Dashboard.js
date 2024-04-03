import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import Text from '../Text/Text';
export default function Dashboard() {




    return (
        <div >
            <Paper sx={{ padding: '15px', zIndex:10, position:'relative' }} elevation={3}>
                <Avatar sx={{ bgcolor: 'red', width: 100, height: 100}}>NU</Avatar>
                <div style={{display: 'inline-block', display: 'flex', justifyContent: 'flex-end'}}>
                <Text title="Welcome New User" body="This is some body text" color='black' titleFontSize="2rem"  />
                </div>
            </Paper>
        </div>
    )
}