import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { DashboardPanelProps } from './DashboardPanel.types';

export function DashboardPanel({ imageUrl, title, header, cards }: DashboardPanelProps) {
  return (
    <>
      <Typography variant='h3'> {title} </Typography>
      <Card
        sx={{
          borderRadius: '25% 8px 8px 25%',
          boxShadow: 'none',
          display: 'flex',
          filter: 'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.15))',
          height: '416px',
          my: 2,
          overflow: 'visible',
          width: 1,
        }}
      >
        <CardMedia
          sx={{ alignSelf: 'center', borderRadius: '32px', height: '448px', width: '448px' }}
          component='img'
          src={imageUrl}
        ></CardMedia>
        <CardContent>
          <Typography variant='h5'> {header} </Typography>
          {cards}
        </CardContent>
      </Card>
    </>
  );
}
