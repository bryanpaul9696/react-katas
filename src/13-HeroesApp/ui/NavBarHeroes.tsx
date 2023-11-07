import { NavLink} from "react-router-dom";

export const NavBarHeroes = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">


            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="dc"
                    >
                        DC
                    </NavLink>

                </div>
            </div>


        </nav>

    );
};