import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import MainAbout from "./pages/AboutUs/MainAbout";
import MainTeacher from "./pages/Teacher/MainTeacher";
import MainContact from "./pages/ContactUs/MainContact";
import Classes from "./pages/Classes/Classes/Classes";
import Blog from "./pages/Blogs/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Teacher from "./pages/Teacher/Teacher/Teacher";
import MainSignUp from "./pages/Login/LoginCom/MainSignUp";
import MainLogin from "./pages/Login/LoginCom/MainLogin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./pages/Home/Header/Header";
import Footer from "./pages/Home/Footer/Footer";
import BabySitterAuthentication from "./pages/Login/BabbySitterLogin/BabySitterAuthentication";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Welcome from "./components/Dashboard/Welcome/Welcome";
import MyProfile from "./components/Dashboard/Profile/MyProfile";
import BabySitterDetails from "./pages/BabySitterDetails/BabySitterDetails";
import MyBookings from "./components/Dashboard/MyBooking/MyBookings";
import Payment from "./components/Dashboard/payment/Payment";
import BookedUserForBabySitter from "./components/Dashboard/BabySitterBooking/BookedUserForBabySitter";
import Users from "./components/Dashboard/Users/Users";
import ManageBooking from "./components/Dashboard/ManageBooking/ManageBooking";
import AddBabySitter from "./components/Dashboard/AddBabySitter/AddBabySitter";
import ManageBabySitter from "./components/ManageBabySitter/ManageBabySitter";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import Report from "./components/Dashboard/Report/Report";
import AdminLogin from "./pages/Login/AdminLogin/AdminLogin";

function App() {
  AOS.init();
  const { pathname } = useLocation();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<MainTeacher />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/class" element={<Classes />} />
        <Route path="/login" element={<MainLogin />} />
        <Route path="/signup" element={<MainSignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<MainContact />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login/babysitter"
          element={<BabySitterAuthentication />}
        />
        <Route
          path="/login/admin"
          element={<AdminLogin />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/baby-sitter/:id" element={<BabySitterDetails />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <RequireAuth>
                <Welcome />
              </RequireAuth>
            }
          />
          <Route
            path="my-profile"
            element={
              <RequireAuth>
                <MyProfile />
              </RequireAuth>
            }
          />
          <Route
            path="my-booking"
            element={
              <RequireAuth>
                <MyBookings />
              </RequireAuth>
            }
          />
          <Route
            path="babysitter-booking"
            element={
              <RequireAuth>
                <BookedUserForBabySitter />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard/payment/:orderId"
            element={
              <RequireAuth>
                <Payment />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          />
               <Route
          path="add-review"
          element={
            <RequireAuth>
              <AddReview />
            </RequireAuth>
          }
        />
          <Route
            path="/dashboard/manage-booking"
            element={
              <RequireAuth>
                <ManageBooking />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard/add-baby-sitter"
            element={
              <RequireAuth>
                <AddBabySitter />
              </RequireAuth>
            }
          />
              <Route
            path="/dashboard/manage-baby-sitter"
            element={
              <RequireAuth>
                <ManageBabySitter />
              </RequireAuth>
            }
          />
           <Route
          path="/dashboard/report"
          element={
            <RequireAuth>
              <Report />
            </RequireAuth>
          }
        />
        </Route>
      </Routes>
      <ToastContainer />
      <div className={`${pathname.includes("/dashboard") && "hidden"} `}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
