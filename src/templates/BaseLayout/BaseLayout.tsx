import { Container, SxProps } from '@mui/material';
import { Header, LayoutWrapper } from './BaseLayout.styled';
import { FullScreenLoader } from 'components/Loader/FullScreenLoader/FullScreenLoader';
import { ReactNode } from 'react';

type BaseLayoutProps = {
  children: ReactNode;
  mainWrapperSx?: SxProps;
  isLoading?: boolean;
};

export const BaseLayout = ({ children, mainWrapperSx, isLoading }: BaseLayoutProps) => (
  <LayoutWrapper>
    {/* //TODO: Implement header as header slide */}
    <Header />
    <Container
      sx={mainWrapperSx ?? {}}
      component='main'
    >
      {children}
    </Container>
    <FullScreenLoader isLoading={isLoading} />
  </LayoutWrapper>
);
