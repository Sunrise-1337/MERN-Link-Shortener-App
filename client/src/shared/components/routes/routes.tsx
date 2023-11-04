import { observer } from 'mobx-react-lite'

import {Routes, Route, Navigate} from "react-router-dom"

import { UrlConstants } from '../../../constants/url.constants';

import isLoggedInStore from '../../../stores/login.store';

import { AuthPage } from '../../../pages/auth-page/auth-page';
import { ShortenPage } from '../../../pages/shorten-page/shorten-page';
import { DetailPage } from '../../../pages/details-page/details-page';
import { LinksPage } from '../../../pages/links-page/links-page';

const CustomRoutes = () => {

    return (
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
    )
}

export default observer(CustomRoutes)