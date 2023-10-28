import { useEffect } from 'react';

import {Routes, Route, Navigate} from "react-router-dom"

import './App.scss'

import { observer } from 'mobx-react-lite'


import SnackbarStore from './stores/snackbar.store';
import isLoggedInStore from './stores/isLoggedIn.store';
import isLoadingStore from './stores/isLoading.store';

import { AuthPage } from './pages/auth-page/auth-page';
import { CreatePage } from './pages/create-page/create-page';
import { DetailPage } from './pages/detail-page/detail-page';
import { LinksPage } from './pages/links-page/links-page';
import { Footer } from './shared/components/footer/footer';
import { Header } from './shared/components/header/header';
import { Loader } from './shared/components/loader/loader';



function App() {
  useEffect(() => {
    // isLoggedIn = false
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
              <Route path="/auth" element={<AuthPage />} />
              ({isLoggedInStore.isLoggedIn} &&
                  <Route path="/create" element={<CreatePage />} />
                  <Route path="/detail/:id" element={<DetailPage />} />
                  <Route path="/links" element={<LinksPage />} />
              )
              <Route path='*' element={<Navigate replace to="/auth" />} />
          </Routes>
        {isLoadingStore.isLoading && <Loader />}
      </div>
      <Footer /> 
    </>
  )
}

export default observer(App)
