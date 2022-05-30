import { Link } from "react-router-dom";

import "./HeaderLink.css";

type HeaderLinkProps = {
    link: {
        name: string,
        url: string 
    },
    isActiveLink: boolean
};

export function HeaderLink({ link, isActiveLink }: HeaderLinkProps): JSX.Element {
    return (
        <Link to={link.url} className={`header__link ${isActiveLink ? 'header__link_active' : ''}`}>
            {link.name}
        </Link>
    )
}