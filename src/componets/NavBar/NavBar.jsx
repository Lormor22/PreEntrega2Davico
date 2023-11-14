import { Link, NavLink } from "react-router-dom"
import { UserWidget } from "../UserWidget/UserWidget"


export const NavBar = () => {

    return (
        <nav className="d-flex justify-content-around p-4 ">
            <div>
                <NavLink to="/">
                <button className="btn btn-primary mx-2">Personajes</button>
                </NavLink>
                <NavLink to="/Locations">
                <button className="btn btn-primary mx-2">Locations</button>
                </NavLink>
                <NavLink to="/Episodes">
                <button className="btn btn-primary mx-2">Episodes</button>
                </NavLink>
            </div>
            <div>  
                <Link to="/profile"  className="d-flex gap-3 flex-lg-row">
                <UserWidget/>
                <p>Pickle_Rick</p>
                </Link>
            </div>
        </nav>
    )
}
