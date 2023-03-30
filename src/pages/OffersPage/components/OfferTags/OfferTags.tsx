import { Box } from '@mui/material';
import { TagButton } from './OfferTags.styled';

export const OfferTags = ({ categories }: { categories: string[] }) => (
  <Box
    sx={{
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      display: 'flex',
      gap: '6px',
      overflowX: 'scroll',
      overflowY: 'hidden',
    }}
  >
    {categories.map((category) => (
      <TagButton key={category}>{category}</TagButton>
    ))}
  </Box>
);
