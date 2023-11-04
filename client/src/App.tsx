import { useEffect } from 'react';
import {useNavigate} from "react-router-dom"

import './App.scss'

import isLoggedInStore from './stores/login.store';

import { Footer } from './shared/components/footer/footer';
import Header from './shared/components/header/header';
import Loader from './shared/components/loader/loader';
import CustomSnackbar from './shared/components/snackbar/snackbar';
import CustomRoutes from './shared/components/routes/routes';

import { UrlConstants } from './constants/url.constants';
import { CookiesConstants } from './constants/cookies.constants';

import { getCookie } from './helpers/cookies.helper';


export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie(CookiesConstants.token)) {
      isLoggedInStore.toSetLoggedInTrue()
    } else {
      navigate(UrlConstants.auth)
    }
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <CustomRoutes></CustomRoutes>
        <Loader />
        <CustomSnackbar></CustomSnackbar>
      </div>
      <Footer /> 
    </>
  )
}