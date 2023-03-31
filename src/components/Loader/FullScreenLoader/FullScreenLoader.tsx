import { Backdrop, CircularProgress } from '@mui/material';

interface FullScreenLoaderProps {
  isLoading: boolean | undefined;
}

export const FullScreenLoader = ({ isLoading = false }: FullScreenLoaderProps) => (
  <Backdrop
    sx={{
      backgroundColor: 'background.default',
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
    open={isLoading}
  >
    <CircularProgress />
  </Backdrop>
);
