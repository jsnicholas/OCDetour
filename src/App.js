import * as React from 'react';
import Button from '@mui/material/Button';
import MediaControlCard from './Cards';

export default function MyApp() {
  return (
    <div className="activitySelect">
      <MediaControlCard></MediaControlCard>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}
