import { Box } from '@mui/material';
import { OfferTagsProps } from './OfferTgas.types';
import { TagButton } from './OfferTags.styled';
import { translateCategory } from '../../../../common/utils/translateCategory';

export const OfferTags = ({ categories }: OfferTagsProps) => (
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
      <TagButton key={category}>{translateCategory(category)}</TagButton>
    ))}
  </Box>
);
