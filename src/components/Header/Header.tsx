import { useLocation } from "react-router-dom";

import './Header.css';

import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";

export function Header(): JSX.Element {
    const { pathname } = useLocation();

    return (
        <header className="header">
            <HeaderComponent pathname={pathname} />
        </header>
    )
}