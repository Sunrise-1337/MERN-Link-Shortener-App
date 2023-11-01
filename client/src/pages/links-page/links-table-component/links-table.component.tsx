import Table from "@mui/material/Table";
import { LinkDataInterface } from "../../../interfaces/link-data.interface";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { UrlConstants } from "../../../constants/url.constants";
import { Link } from "react-router-dom";

export const LinksTableComponent = (props: LinksTablePropsInterface) => {
    
    return (
        <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Number</TableCell>
                    <TableCell>Original link</TableCell>
                    <TableCell>Short link</TableCell>
                    <TableCell>Details</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.linksArray.map((link, index) => (
                    <TableRow key={link.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            {index + 1}
                        </TableCell>
                        <TableCell>
                            <Link to={link.fullLink}>
                                {link.fullLink}
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Link to={link.shortLink}>
                                {link.shortLink}
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Link to={UrlConstants.details + link.id}>
                                Open
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
      </Table>
    )
}

interface LinksTablePropsInterface {
    linksArray: LinkDataInterface[]
}