import { alpha, styled } from '@mui/material/styles';
import { AppBar, Box, Fade, InputBase, Toolbar, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { GradientButton } from '../GradientButton/GradientButton';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

const Search = styled('div')(({ theme }) => ({
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: '1px solid #E5E5E5',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  position: 'relative',
  width: '100%',
  [theme.breakpoints.up('mobile')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  padding: theme.spacing(0, 2),
  pointerEvents: 'none',
  position: 'absolute',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    [theme.breakpoints.up('mobile')]: {
      '&:focus': {
        width: '38ch',
      },
      width: '30ch',
    },
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  color: 'inherit',
}));

export const NavBar = () => {
  const [auth, setAuth] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const { t } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const heightScreen = window.screen.height / 2;

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
          backgroundColor: '#fff',
          boxShadow: 'none',
          color: '#000',
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
          <GradientButton
            sx={{ width: '300px' }}
            onClick={() => {
              setAuth(!auth);
            }}
          >
            {auth ? `${t('navbar.createOffer')}` : `${t('navbar.login')}`}
          </GradientButton>
        </Toolbar>
      </AppBar>
    </Fade>
  );
};
