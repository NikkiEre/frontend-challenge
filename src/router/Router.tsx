import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";

export default function Router(): JSX.Element {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Main/>} />
                <Route path="favorite" element={<Main />} />
            </Route>
        </Routes>
    )
}