import './create-page.scss'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { toSendLinkToShorten } from '../../helpers/api.helper'
import { useNavigate } from 'react-router-dom'
import { UrlConstants } from '../../constants/url.constants'

export const CreatePage = () => {
    const [link, setLink] = useState<string>(''),
          navigate = useNavigate();

    const toShortenLink = () => {
        toSendLinkToShorten(link)
            .then(res => {
                navigate(UrlConstants.details + res.id)
            })
    }

    const enterHandler = (code: string) => {
        if (code !== '13') return

        toShortenLink()
    }
    
    return (
        <div className="create page">
            <Card className='create__card'>
                <CardContent>
                    <Typography variant="h2" component="div" className='auth__title'>
                        Shorten the link
                    </Typography>
                    <div className="create__card-lower-row">
                        <TextField id="outlined-basic" label="Link to shorten" 
                                variant="outlined"
                                name='Link to shorten' value={link}
                                onChange={e => setLink(e.target.value)}
                                onKeyDown={e => enterHandler(e.code)}/>

                        <Button size="medium" variant="contained"
                                className='create__card-btn'
                                onClick={() => toShortenLink()}>Shorten</Button> 
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}