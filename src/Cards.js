import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import drawIcon from './assets/images/draw.jpg';
import journalIcon from './assets/images/journal.jpg';

export default function MediaControlCard() {
    // const theme = useTheme();

    return (
        // First Activity Card
        <div className='cards'>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Draw                    </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            5 Minutes
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 50, height: 50 }}
                    image={drawIcon}
                    alt="Draw"
                />
            </Card>
            {/* //Second Activity Card */}
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '2 1 auto', justifyItems: 'space-between' }}>
                        <Typography component="div" variant="h5">
                            Draw                    </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            5 Minutes
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 50 }}
                    image={journalIcon}
                    alt="Journal"
                />
            </Card>
        </div>
    );
}
