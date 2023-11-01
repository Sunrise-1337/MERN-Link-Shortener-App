import { useEffect, useState } from 'react'
import './links-page.scss'
import { LinkDataInterface } from '../../interfaces/link-data.interface'
import Typography from '@mui/material/Typography'
import { UrlConstants } from '../../constants/url.constants'
import { Link } from 'react-router-dom'
import { toGetAllLinks } from '../../helpers/api.helper'
import { LinksTableComponent } from './links-table-component/links-table.component'

export const LinksPage = () => {
    const [links, setLinks] = useState<LinkDataInterface[]>([])

    useEffect(() => {
        toGetAllLinks()
            .then(res => setLinks(res))
    }, [])
    
    return (
        <>
            {links.length
                ? 
                    <div className='links page'>
                        <Typography variant="h3" component="h3">
                            List of you shortened links:
                        </Typography>
                        <LinksTableComponent linksArray={links} />
                    </div>
                : 
                    <div className="no-links page">
                        <Typography variant="h3" component="h3">
                            You don't have any links at the moment...<br />
                            Why dont you <Link to={UrlConstants.shorten}> shorten some?</Link>
                        </Typography>
                    </div>
            }
        </>
    )
}