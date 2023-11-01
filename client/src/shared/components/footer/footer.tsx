import Typography from '@mui/material/Typography'
import './footer.scss'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className="footer__wrap container">
                <Typography variant="h4" component="h4">
                    Shorten link
                </Typography>
                <p>All copyrights are claimed as of {currentYear}</p>
            </div>
        </footer>
    )
}