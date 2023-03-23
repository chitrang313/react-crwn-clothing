import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import crwnLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";

function Navigation(params) {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={crwnLogo} alt="crwn logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
export default Navigation;
