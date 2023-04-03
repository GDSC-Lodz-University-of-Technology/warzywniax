import { Card, CardContent, Stack, Typography } from '@mui/material';
import { DashboardPanelProps } from './DashboardPanel.types';

export function DashboardPanel({ title, header, headerButton, cards }: DashboardPanelProps) {
  return (
    <Stack
      spacing={2}
      py={2}
    >
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography variant='h3'> {title} </Typography>
        {headerButton}
      </Stack>
      <Card
        sx={{
          px: 8,
          py: 3,
        }}
      >
        <CardContent>
          <Typography variant='h5'> {header} </Typography>
          {cards}
        </CardContent>
      </Card>
    </Stack>
  );
}
