import { Outlet } from "react-router-dom";
import Header from "./Header"

const Root = () => {

    return (
        <>
            <Header />
            <div className="main">
                <Outlet />
            </div>
        </>
    )
}

export default Root;