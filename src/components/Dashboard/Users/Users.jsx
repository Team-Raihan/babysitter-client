import axios from "axios";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import LoadingData from "../../Loading/LoadingData";

const Users = () => {
  const getData = async () => {
    return await axios.get("http://localhost:5000/api/user");
  };
  const {
    data: allUser,
    isLoading,
    refetch,
    error,
  } = useQuery({ queryKey: ["manageAllUser", 1], queryFn: getData });
  if (isLoading) {
    return (
      <div className=" mt-10">
        <LoadingData />;
      </div>
    );
  }
  console.log(allUser);

  const deleteItem = async (id) => {
    const sure = window.confirm("Are you sure? You want to remove this user!");
    if (sure) {
      const url = `https://teckno-interior.herokuapp.com/api/user/${id}`;

      axios
        .delete(url, {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response) => {
          const { data } = response;
          if (data) {
            refetch();
          }
        });
    }
  };

  return (
    <>
      <div className="w-full min-h-screen px-1 bg-gray-100 py-5 md:py-10">
        <div className=" hidden md:block mx-auto sm:px-6 lg:px-12">
          <div className="flex flex-col">
            <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="border-b border-gray-200 font-thin bg-white leading-4 tracking-wider text-base text-gray-500">
                      <th className="px-6 py-5 text-left" colSpan="100%">
                        <p>Manage Users</p>
                      </th>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                
                  
                      <th className="px-6 py-3  font-medium text-center">
                      Email Address
                      </th>

                      <th className="px-6 py-3 text-center font-medium">
                       Remove
                      </th>
                      <th className="px-6 py-3 text-center font-medium">
                        Make Admin
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {allUser?.data?.map((user) => (
                      <tr key={user?._id}>
                        
                        

                        <td className="px-6 text-center py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          <div className="flex flex-col items-center">
                            <p>{user?.email}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                          <div className="flex justify-center items-center">
                            <button
                              onClick={() => deleteItem(user?._id)}
                              className="btn md:btn-md btn-sm  btn-error  text-white font-semibold"
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                          <div className="flex justify-center items-center">
                            <button
                              onClick={() => user?._id}
                              className="btn md:btn-md btn-sm  btn-warning  text-white font-semibold"
                            >
                              Make Admin
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* mobile device  */}
        <div className="md:hidden w-full  lg:px-8">
          <div className="flex flex-col">
            <div className="flex justify-end   items-center py-5">
              <NavLink
                to="/dashboard/manage-booking"
                className="btn md:btn-md btn-sm  px-10 btn-secondary text-white mx-auto"
              >
                Manage Booking
              </NavLink>
            </div>

            <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="border-b border-gray-200 font-thin bg-white leading-4 tracking-wider text-base text-gray-500">
                      <th className="px-6 py-5 text-left" colSpan="100%">
                        <p>All User</p>
                      </th>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                      <th className=" py-3 pl-4 text-left font-normal">Email</th>

                      <th className="py-3 text-center font-normal">Delete</th>
                  
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {allUser?.data?.map((item) => (
                      <tr className="" key={item?._id}>
                      

                        <td className="py-4 border-b">
                     <span className="pl-4">{item?.email}</span>
                        </td>
                        <td className="py-4 border-b">
                          <div className="flex justify-center items-center">
                            <button
                              onClick={() => deleteItem(item?._id)}
                              className="btn md:btn-md btn-sm  btn-error  text-white font-normal"
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {allUser?.data?.length === 0 ? (
          <h2 className="text-center mt-10 text-primary text-xl font-semibold">
            No Item Found
          </h2>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Users;
