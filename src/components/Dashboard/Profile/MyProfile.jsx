import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";




const MyProfile = () => {
  const [user] = useAuthState(auth);
  

  return (
    <>
      <div className="min-h-fit md:m-16 m-4">
        <div className="flex-1  flex flex-col">
          <div className=" p-6 rounded-2xl  shadow">
            <div className="divider before:bg-secondary after:bg-secondary">
              <h2 className=" uppercase md:text-4xl text-secondary font-bold">
                My Profile
              </h2>
            </div>
            <form autoComplete="off">
              <div className="lg:my-16 md:my-8 my-4 ">
                <div className="flex lg:flex-row flex-col  items-center justify-center lg:gap-10 md:gap-6 gap-4">
                  <div className="avatar">
                    <div className="lg:w-80 md:w-56 w-32 ring-2 ring-secondary ring-offset-base-100 ring-offset-2 rounded">
                      <img src={user?.photoURL} alt="user img" />
                    </div>
                  </div>
                  <div className="flex flex-col md:gap-4 gap-2 md:font-semibold md:text-xl">
                    <p>
                      <strong>Name: </strong> {user?.displayName}
                    </p>
                    <p>
                      <strong>Email: </strong> {user?.email}
                    </p>
                 
                  </div>
                </div>
              </div>
             
            </form>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
