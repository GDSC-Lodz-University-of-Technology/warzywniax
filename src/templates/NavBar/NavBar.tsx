import { AppBar, Box, Fade, Toolbar, Typography, useTheme } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from './NavBar.styled';
import { useCallback, useEffect, useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Button } from 'components/Button/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const [auth, setAuth] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const heightScreen = window.screen.height / 2;
  const { t } = useTranslation();
  const theme = useTheme();

  const handleScroll = useCallback(() => {
    const currScrollPos = window.pageYOffset;
    const condition = currScrollPos < prevScrollPos || currScrollPos < heightScreen;

    setShowBar(condition);
    setPrevScrollPos(currScrollPos);
  }, [prevScrollPos, heightScreen]);

  useEffect(() => {
    addEventListener('scroll', handleScroll);

    return () => removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Fade in={showBar}>
      <AppBar
        position='sticky'
        sx={{
          backgroundColor: theme.palette.common.white,
          boxShadow: 'none',
          color: theme.palette.common.black,
          display: 'flex',
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))',
          height: '80px',
          justifyContent: 'center',
        }}
      >
        <Toolbar>
          <Typography
            variant='h4'
            noWrap
            component='div'
            sx={{ fontWeight: '700', px: 2 }}
          >
            Logo
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              inputProps={{ 'aria-label': 'search' }}
              placeholder={`${t('navbar.search')}`}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {auth && (
            <div>
              <AccountCircleOutlinedIcon />
            </div>
          )}
          <Button
            sx={{ height: '36px', width: '300px' }}
            onClick={() => {
              setAuth(!auth);
            }}
          >
            {auth ? `${t('navbar.createOffer')}` : `${t('navbar.login')}`}
          </Button>
        </Toolbar>
      </AppBar>
    </Fade>
  );
};
