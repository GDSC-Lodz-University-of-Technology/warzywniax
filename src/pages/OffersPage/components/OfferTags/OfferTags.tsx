import { Box, Typography } from '@mui/material';

export const OfferTags = ({ categories }: { categories: string[] }) => (
  <Box
    component='div'
    sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}
  >
    {categories.map((category) => (
      <Typography
        component='span'
        key={category}
        sx={{
          backgroundColor: '#C8EED2',
          borderRadius: '0.5rem',
          color: 'primary',
          fontSize: '0.8rem',
          fontWeight: 'regular',
          px: '0.7rem',
          py: '0.1rem',
        }}
      >
        {category}
      </Typography>
    ))}
  </Box>
);
