import { Box, Button, ButtonProps, styled } from '@mui/material';

const TagButton = styled(Button)<ButtonProps>(() => ({
  '&:hover': {
    backgroundColor: '#C8EED2',
    filter: 'brightness(95%)',
  },
  backgroundColor: '#C8EED2',
  borderRadius: '0.5rem',
  color: 'black',
  fontSize: '0.8rem',
  fontWeight: '400',
  height: '1.1rem',
  px: '0.7rem',
  py: '0.1rem',
  textTransform: 'none',
}));

export const OfferTags = ({ categories }: { categories: string[] }) => (
  <Box
    sx={{
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      display: 'flex',
      gap: '0.4rem',
      overflowX: 'scroll',
      overflowY: 'hidden',
    }}
  >
    {categories.map((category) => (
      <TagButton key={category}>{category}</TagButton>
    ))}
  </Box>
);
