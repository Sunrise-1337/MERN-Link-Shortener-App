import './auth-page.scss'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useForm from '../../hooks/useForm';

import SnackbarStore from '../../stores/snackbar.store';
import { toLogin, toRegister } from '../../helpers/api.helper';
import isLoggedInStore from '../../stores/isLoggedIn.store';
import { useNavigate } from 'react-router-dom';
import { SnackbarTypesConstants } from '../../constants/snackbar-types.constants';
import { setCookie } from '../../helpers/cookies.helper';
import { CookiesConstants } from '../../constants/cookies.constants';
import { VariableConstants } from '../../constants/variables.constants';
import { UrlConstants } from '../../constants/url.constants';
import { useEffect } from 'react';

export const AuthPage = () => {
    const form = useForm(),
          navigate = useNavigate()

    useEffect(() => {
        if (isLoggedInStore.isLoggedIn) {
            navigate(UrlConstants.links)
        }
    }, [])

    const authProcessHandler = (action: "login" | "signup"): void => {
        const { email, password } = form.errors;
        const isFormDirty = form.dirty;
        const values = form.values;
    
        if (!email && !password && isFormDirty) {

            if (action === "login") {
                toLogin(values)
                    .then(res => {
                        SnackbarStore.toShowSnackBar(res.message, SnackbarTypesConstants.success);
                        setCookie(CookiesConstants.token, res.token, VariableConstants.cookieExpireHours)
                        isLoggedInStore.toSetLoggedInTrue();
                        navigate(UrlConstants.shorten)
                    });
            } else {
                toRegister(values)
                    .then(res => {
                        SnackbarStore.toShowSnackBar(res.message, SnackbarTypesConstants.success);
                    });
            }

        } else {
            const errorIfDirty = (email ? email + '<br />' : '') + (password || '');
            const errorIfPristine = 'Please, fill the form first';
    
            SnackbarStore.toShowSnackBar(isFormDirty ? errorIfDirty : errorIfPristine, SnackbarTypesConstants.error);
        }
    };

    
    
    return (
        <div className="auth page">
            <Card className='auth__card'>
                <CardContent>
                    <Typography variant="h2" component="div" className='auth__title'>
                        Shorten the link
                    </Typography>

                    <TextField id="outlined-basic" label="Email" 
                               variant="outlined" className='auth__input'
                               name='email' value={form.values.email}
                               onChange={form.handleChange}/>
                    <TextField id="outlined-basic" label="Password" 
                               variant="outlined" className='auth__input' type='password'
                               name='password' value={form.values.password}
                               onChange={form.handleChange}/>
                </CardContent>
                <CardActions>
                    <Button size="medium" variant="contained"
                            className='auth__login' onClick={() => authProcessHandler('login')}>Log in</Button>
                    <Button size="medium" variant="contained" 
                            className='auth__signup' onClick={() => authProcessHandler("signup")}>Sign up</Button>
                </CardActions>
            </Card>
        </div>
    )
}