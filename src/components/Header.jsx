import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="w-full text-center  p-2 mb-4">
            <NavLink className="btn mr-4 " to="/">Home</NavLink>
            <NavLink className="btn mr-4 " to="/users">Users</NavLink>
            <NavLink className="btn mr-4 " to="/singup">Sing-Up</NavLink>
            <NavLink className="btn mr-4 " to="/singin">Sing-In</NavLink>
            <NavLink className="btn " to="/addCoffee">Add Coffee</NavLink>
        </div>
    );
};

export default Header;