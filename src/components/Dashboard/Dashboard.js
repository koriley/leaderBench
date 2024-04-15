import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import Text from '../Text/Text';
export default function Dashboard() {




    return (
        <div >
            <Paper sx={{ padding: '15px', zIndex: 10, position: 'relative' }} elevation={3}>
                <div style={{ display: 'inline-block', display: 'flex' }}>
                    <Avatar sx={{ bgcolor: 'red', width: 100, height: 100 }}>NU</Avatar>
                    <Text title="Welcome New User" body=" Member #99999999048" color='black' titleFontSize="2rem" bodyFontSize='1rem' />
                </div>
            </Paper>
        </div>
    )
}