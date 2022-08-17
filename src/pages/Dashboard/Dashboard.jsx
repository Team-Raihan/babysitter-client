import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/verifyRole";


const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const [user] = useAuthState(auth);
  const [role, roleLoading] = useAdmin(user?.email);
  const parents = role==="parents"
  const babysitter = role==="babysitter"
  const admin = role==="admin"

  return (
    <div className="drawer drawer-mobile ">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>

        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>

        <ul className=" flex flex-col gap-5 shadow-md  bg-[rgb(0,7,61)] p-4 overflow-y-auto w-80 font-semibold  text-white">
          {roleLoading && (
            <p className="mt-10 text-xl font-semibold text-blue-500">
              Loading...
            </p>
          )}
           {/* <!-- Sidebar content here -->  */}
         
          <li>
            <NavLink
              to="/dashboard/my-profile"
              end
              className={({ isActive }) =>
                `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                  isActive ? " bg-primary" : undefined
                }`
              }
            >
              My Profile
            </NavLink>
          </li>

          { babysitter && (
            <>
            
              <li>
                <NavLink
                  to="/dashboard/babysitter-booking"
                  className={({ isActive }) =>
                    `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                      isActive ? " bg-primary" : undefined
                    }`
                  }
                >
                  Manage Booking
                </NavLink>
              </li>
            </>
         )} 
          {parents && (
            <>
            
              <li>
                <NavLink
                  to="/dashboard/my-booking"
                  className={({ isActive }) =>
                    `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                      isActive ? " bg-primary" : undefined
                    }`
                  }
                >
                  My Booking
                </NavLink>
              </li>
            </>
         )} 

         
{admin && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                      isActive ? " bg-primary" : undefined
                    }`
                  }
                  to="/dashboard/users"
                >
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                      isActive ? " bg-primary" : undefined
                    }`
                  }
                  to="/dashboard/add-baby-sitter"
                >
                  Add Baby Sitter
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                      isActive ? " bg-primary" : undefined
                    }`
                  }
                  to="/dashboard/manage-baby-sitter"
                >
                  Manage Baby Sitter
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                      isActive ? " bg-primary" : undefined
                    }`
                  }
                  to="/dashboard/manage-booking"
                >
                  Manage Booking
                </NavLink>
              </li>
        
            </>
          )}
           <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `p-2  text-white rounded hover:bg-gray-200 hover:text-gray-500 ${
                  isActive ? " bg-primary" : undefined
                }`
              }
            >
            Go Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
