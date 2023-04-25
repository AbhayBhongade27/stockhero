import React from "react";
import { NavLink } from "react-router-dom";
import HeroIcon from "../Asset/Frame 104.png";
import NavImg from "../Asset/navimg.png";

import Notificationbell from "../Asset/Notification bell.png";
import User from "../Asset/./indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.jpg";
import downArrow from "../Asset/baseline_arrow_drop_down_white_48dp.png";
const NavBar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact="true" to="/" className="nav-logo">
            <span>
              <img
                src={HeroIcon}
                alt="loading"
                style={{ width: "50px", height: "50px", marginBottom: "1rem" }}
              />
            </span>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <img
                  src={Notificationbell}
                  alt="loading"
                  style={{ width: "40px", height: "40px" }}
                />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <span>
                  <img
                    src={NavImg}
                    alt="loading"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <img
                    src={downArrow}
                    alt="loading"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </span>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
