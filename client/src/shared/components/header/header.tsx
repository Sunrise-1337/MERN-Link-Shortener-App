import Typography from '@mui/material/Typography'
import './header.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { UrlConstants } from '../../../constants/url.constants'
import ExitToAppIcon from '@mui/icons-material/ExitToAppTwoTone';
import { deleteCookie } from '../../../helpers/cookies.helper';
import { CookiesConstants } from '../../../constants/cookies.constants';
import isLoggedInStore from '../../../stores/login.store';
import SnackbarStore from '../../../stores/snackbar.store';
import { SnackbarMessagesConstants } from '../../../constants/snackbar-messages.constants';
import { SnackbarTypesConstants } from '../../../constants/snackbar-types.constants';
import { observer } from 'mobx-react-lite';

const Header = () => {
    const navigate = useNavigate();

    const onLogOut = (): void => {
        deleteCookie(CookiesConstants.token)
        isLoggedInStore.toSetLoggedInFalse()
        SnackbarStore.toShowSnackBar(SnackbarMessagesConstants.logout, SnackbarTypesConstants.error)
        navigate(UrlConstants.auth)
    }

    return (
        <header className='header'>
            <div className="header__wrap container">
                <Typography variant="h3" color={'white'}>
                    Shorten link
                </Typography>
                {isLoggedInStore.isLoggedIn && 
                    <div className="header__actions">
                        <nav className='header__nav'>
                            <NavLink to={UrlConstants.links}>
                                <Typography variant="h6" color={'white'}>
                                    Links list
                                </Typography>
                            </NavLink>
                            <NavLink to={UrlConstants.shorten}>
                                <Typography variant="h6" color={'white'}>
                                    Shorten links
                                </Typography>
                            </NavLink>
                        </nav>
                        <ExitToAppIcon sx={{color: 'white'}} onClick={onLogOut}/>
                    </div>
                }
            </div>
        </header>
    )
}

export default observer(Header)