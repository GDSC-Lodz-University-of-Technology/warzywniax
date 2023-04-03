import { Grid, Typography } from '@mui/material';
import { AuthFormWrapperProps } from './AuthFormWrapper.types';
import { Button } from 'components/Button/Button';
import { FormGridItem } from './AuthFormWrapper.styled';
import { Link } from 'react-router-dom';

export const AuthFormWrapper = ({
  formHeader,
  children,
  questionHeader,
  questionLinkLabel,
  questionLinkUrl,
}: AuthFormWrapperProps) => (
  <Grid
    marginTop={2}
    gap={'0px 24px'}
    container
  >
    <FormGridItem
      item
      mobile={12}
      tablet={6}
      desktop={5}
    >
      <Typography
        fontWeight='bold'
        sx={{
          mb: 4,
        }}
        variant='h4'
      >
        {formHeader}
      </Typography>
      {children}
    </FormGridItem>
    <Grid
      item
      tablet={5}
      mobile={12}
      sx={{
        pt: { mobile: 6, tablet: 10 },
        px: 8,
      }}
    >
      <Typography
        fontWeight={600}
        variant='h4'
      >
        {questionHeader}
      </Typography>
      <Button
        sx={{
          mt: 4,
          textTransform: 'initial',
        }}
        component={Link}
        to={questionLinkUrl}
        fullWidth
        variant='outlined'
      >
        {questionLinkLabel}
      </Button>
    </Grid>
  </Grid>
);
