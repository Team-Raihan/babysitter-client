import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import auth from "../../../firebase.init";
import "./Header";
export default function Header() {
  const [user] = useAuthState(auth);
  let [open, setOpen] = useState(false);
  const logout = () => {
    signOut(auth);
  };
  const { pathname } = useLocation();
  return (
    <div className="shadow-md w-full relative top-0 left-0 z-50 ">
      {/* <div className="header_content flex justify-between items-center"> */}
      {/* <div className="logo">
          <Link to="/#">
            <img
              className="h-auto max-w-full align-middle"
              src={logo}
              alt="logo"
            />
          </Link>
        </div> */}
      <nav className="flex items-center justify-between bg-white py-4 md:px-10 px-7 z-40  ">
        <div
          className="font-bold  cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <div className="logo">
            <Link to="/">
              <img
                className="h-auto max-w-full align-middle"
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
        </div>
       <div>
       {pathname?.includes("dashboard") && (
          <div className="lg:navbar-start lg:hidden">
            <label
              tabIndex="1"
              htmlFor="dashboard-sidebar"
              className="btn text-3xl   btn-ghost lg:hidden"
            >
              <ion-icon  name="menu"></ion-icon>
            </label>
          </div>
        )}
       </div>

        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl absolute right-8 top-6 cursor-pointer lg:hidden ${
            pathname.includes("dashboard") ? "hidden" : ""
          } `}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`lg:flex lg:items-center lg:space-x-3 lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }
          z-50
          `}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                `duration-500 mt-4 lg:mt-0 hover:text-amber hover:bg-nav-pink p-1 rounded ${
                  isActive ? "bg-nav-pink text-amber" : undefined
                }`
              }
              to="/"
            >
              {/* li-header-navbar_item has-sub, a-inline-block py-6 px-2.5 */}
              <span className="">HOME</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `duration-500 mt-4 lg:mt-0 hover:text-amber hover:bg-nav-pink p-1 rounded ${
                  isActive ? "bg-nav-pink text-amber" : undefined
                }`
              }
              to="/about"
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `duration-500 mt-4 lg:mt-0 hover:text-amber hover:bg-nav-pink p-1 rounded ${
                  isActive ? "bg-nav-pink text-amber" : undefined
                }`
              }
              to="/class"
            >
              CLASSES
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `duration-500 mt-4 lg:mt-0 hover:text-amber hover:bg-nav-pink p-1 rounded ${
                  isActive ? "bg-nav-pink text-amber" : undefined
                }`
              }
              to="/teacher"
            >
              TEACHER
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `duration-500 mt-4 lg:mt-0 hover:text-amber hover:bg-nav-pink p-1 rounded ${
                  isActive ? "bg-nav-pink text-amber" : undefined
                }`
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `duration-500 mt-4 lg:mt-0 hover:text-amber hover:bg-nav-pink p-1 rounded ${
                  isActive ? "bg-nav-pink text-amber" : undefined
                }`
              }
              to="/contact"
            >
              CONTACT US
            </NavLink>
          </li>
          {user && (
            <div className="lg:hidden">
              <li>
                <Link      onClick={() => setOpen(!open)} to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="" onClick={logout}>
                  Logout
                </Link>
              </li>
            </div>
          )}
          {user && (
            <div className="hidden lg:block dropdown dropdown-end">
              <label tabIndex="0" className="btn  btn-ghost  btn-circle avatar">
                <div className="w-10 rounded-full  ring-white ring-2">
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                    }
                    alt="user img"
                  />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3  p-2 shadow menu menu-compact dropdown-content bg-secondary rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {!user && (
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  `duration-500 mt-4 lg:mt-0 hover:text-amber hover:bg-nav-pink p-1 rounded ${
                    isActive ? "bg-nav-pink text-amber" : undefined
                  }`
                }
                to="/login "
              >
                LOGIN
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      {/* </div> */}
    </div>
  );
}
