import { useEffect } from 'react';

import {Routes, Route, Navigate, useNavigate} from "react-router-dom"

import './App.scss'

import { observer } from 'mobx-react-lite'


import SnackbarStore from './stores/snackbar.store';
import isLoggedInStore from './stores/login.store';
import LoaderStore from './stores/loader.store';

import { AuthPage } from './pages/auth-page/auth-page';
import { ShortenPage } from './pages/shorten-page/shorten-page';
import { DetailPage } from './pages/details-page/details-page';
import { LinksPage } from './pages/links-page/links-page';
import { Footer } from './shared/components/footer/footer';
import { Header } from './shared/components/header/header';
import { Loader } from './shared/components/loader/loader';


import { VariableConstants } from './constants/variables.constants';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';
import { UrlConstants } from './constants/url.constants';
import { getCookie } from './helpers/cookies.helper';
import { CookiesConstants } from './constants/cookies.constants';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie(CookiesConstants.token)) {
      isLoggedInStore.toSetLoggedInTrue()
    } else {
      navigate(UrlConstants.auth)
    }
  }, [])

  const handleSnackBarClose = (_event: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    SnackbarStore.toHideSnackBar();
  };
  
  const transitionDirectionUp = (props: Omit<SlideProps, 'direction'>) => {
    return <Slide {...props} direction="up" />;
  }

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path={UrlConstants.auth} element={<AuthPage />} />
          {isLoggedInStore.isLoggedIn &&
            <>
              <Route path={UrlConstants.shorten} element={<ShortenPage />} />
              <Route path={UrlConstants.details + ':id'} element={<DetailPage />} />
              <Route path={UrlConstants.links} element={<LinksPage />} />
            </>
          }
          <Route path='*' element={<Navigate replace to={UrlConstants.auth} />} />
        </Routes>
        {LoaderStore.isLoading && <Loader />}
        <Snackbar open={!!SnackbarStore.message} autoHideDuration={VariableConstants.snackbarDuration}
                  onClose={handleSnackBarClose} 
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  TransitionComponent={transitionDirectionUp}>
          <Alert severity={SnackbarStore.type}>
            <p dangerouslySetInnerHTML={{
                  __html: SnackbarStore.message
                }} style={{display: 'contents'}}></p>
          </Alert>
        </Snackbar>
      </div>
      <Footer /> 
    </>
  )
}

export default observer(App)
