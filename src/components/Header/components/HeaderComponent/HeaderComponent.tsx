import { HeaderLink } from "../HeaderLink/HeaderLink";

import "./HeaderComponent.css";

type HeaderComponentProps = {
    pathname: string
}

export function HeaderComponent({pathname}: HeaderComponentProps): JSX.Element {

    const array_links = [
        {
            name: "Все котики",
            url: "/"
        },
        {
            name: "Любимые котики",
            url: "/favorite"
        }
    ];

    return (
        <nav className="header__nav">
            {
                array_links.map((link) => <HeaderLink link={link} key={link.name} isActiveLink={link.url === pathname} />)
            }
        </nav>
    )
}