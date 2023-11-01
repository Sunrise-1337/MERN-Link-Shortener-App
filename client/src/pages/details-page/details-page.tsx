import { useEffect, useState } from 'react'
import './details-page.scss'
import { LinkDataInterface } from '../../interfaces/link-data.interface'
import { Link, useParams } from 'react-router-dom';
import { toGetSingleLinkData } from '../../helpers/api.helper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { UrlConstants } from '../../constants/url.constants';

export const DetailPage = () => {
    const [details, setDetails] = useState<LinkDataInterface>(),
          { id } = useParams();

    useEffect(() => {
        toGetSingleLinkData(id as string)
            .then(res => setDetails(res))
        

        return (
            setDetails(undefined)
        )
    }, [])
    
    return (
        <div className='details page'>
            {details &&
                <>
                    <Typography variant="h3" component="h3">
                        Your link with id <strong>{details.id}</strong>
                    </Typography>
                    <Typography variant="h5" component="h4">
                        Original link: <a href={details.fullLink} target='_blank'>{details.fullLink}</a>
                    </Typography>
                    <Typography variant="h5" component="h4">
                        Short link: <a href={details.shortLink} target='_blank'>{details.shortLink}</a>
                    </Typography>
                    <Typography variant="h5" component="h4">
                        Redirects: <span className='strong'>{details.redirects}</span>
                    </Typography>
                    <Typography variant="h5" component="h4">
                        Creation date: <span className='strong'>{new Date(details.date).toLocaleDateString()}</span>
                    </Typography>

                    <Link className='details__link' to={UrlConstants.links}>
                        <Button size="medium" variant="contained"
                                className='auth__login'>Go to the list</Button>
                    </Link>
                </>
            }
        </div>
    )
}