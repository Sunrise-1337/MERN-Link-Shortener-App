import './auth-page.scss'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useForm from '../../hooks/useForm';

export const AuthPage = () => {
    const form = useForm();
    
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
                               name='password' value={form.values.email}
                               onChange={form.handleChange}/>
                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="medium" variant="contained" className='auth__login'>Log in</Button>
                    <Button size="medium" variant="contained" className='auth__signup'>Sign up</Button>
                </CardActions>
            </Card>
        </div>
    )
}