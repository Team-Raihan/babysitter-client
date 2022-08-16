import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import LoadingData from "../../Loading/LoadingData";


const MyBookings = () => {
  const [user] = useAuthState(auth);
  const getData = async () => {
    return await axios.get(`http://localhost:5000/api/order/${user?.email}`);
  };
  const {
    data: myBooking,
    isLoading,
    refetch,
    error,
  } = useQuery({ queryKey: ["manageMyBooking", 1], queryFn: getData });
  if (isLoading) {
    return (
      <div className=" mt-10">
        <LoadingData />;
      </div>
    );
  }


  const deleteItem = async (id) => {
    const sure = window.confirm("Are you sure? You want to cancel booking!");
    if (sure) {
      const url = `http://localhost:5000/api/order/${id}`;

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
                        <p>Manage Booking</p>
                      </th>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                      <th className="px-6 py-3 text-center font-medium">
                    Baby Sitter Image
                      </th>
                      <th className="px-6 py-3 text-center font-medium">
                       Baby Sitter Name
                      </th>
                      <th className="px-6 py-3  font-medium text-center">
                        Booking Price
                      </th>

                      <th className="px-6 py-3 text-center font-medium">
                        Cancel Booking
                      </th>
                      <th className="px-6 py-3 text-center font-medium">
                        Payment
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {myBooking?.data?.map((product) => (
                      <tr key={product?._id}>
                        <td className="flex justify-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="avatar">
                            <div className="w-12 rounded-full ring-2 ring-secondary ring-offset-base-100 ring-offset-2">
                              <img
                                className=" "
                                src={product?.productImg}
                                alt="product"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">
                            <div className="flex flex-col items-center  justify-center">
                              <div>{product?.productName}</div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 text-center py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          <div className="flex flex-col items-center">
                            <p>$ {product?.orderTotal} USD</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                          <div className="flex justify-center items-center">
                          
                              <button
                              disabled={product?.paid}
                                onClick={() => deleteItem(product?._id)}
                                className="btn md:btn-md btn-sm  btn-error  text-white font-semibold"
                              >
                                Cancel
                              </button>
                       
                        
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                          <div className="flex justify-center items-center">
                            {!product.paid && (
                              <Link to={`/dashboard/payment/${product?._id}`}>
                                <button className="btn md:btn-md btn-sm  btn-warning  text-white font-semibold">
                                  pay
                                </button>
                              </Link>
                            )}
                            {product.paid && (
                              <div className="border border-success p-2 rounded">
                                <p className="text-success">
                                 Booking Complete
                                </p>
                              </div>
                            )}
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
            <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="border-b border-gray-200 font-thin bg-white leading-4 tracking-wider text-base text-gray-500">
                      <th className="px-6 py-5 text-left" colSpan="100%">
                        <p>Manage Booking</p>
                      </th>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                      <th className=" text-left px-6 font-normal">Info</th>

                      <th className="py-3 text-center font-normal">
                        Cancel
                      </th>
                      <th className=" py-3 text-center font-normal">Payment</th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {myBooking?.data?.map((item) => (
                      <tr className=" py-2 border-b border-gray-200  " key={item?._id}>
                        <td className=" ">
                          <div className="text-sm leading-5 text-secondary">
                            <div className="">
                              <td className="flex flex-col justify-start px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="avatar">
                                  <div className="w-10 rounded-full ring-2 ring-secondary">
                                    <img
                                      className=" "
                                      src={item?.productImg}
                                      alt="product"
                                    />
                             
                                  </div>
                             
                                  
                                </div>
                                <div>
                                {item?.productName?.length > 10
                                  ? `${item?.productName?.slice(0, 15)}`
                                  : item?.productName}
                              </div>
                              </td>
                            
                            </div>
                          </div>
                        </td>

                        <td className="py-4">
                          <div className="flex justify-center items-center">
                            <button
                              disabled={item?.paid}
                              onClick={() => deleteItem(item?._id)}
                              className="btn md:btn-md btn-sm  btn-error  text-white font-normal"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex justify-center items-center">
                            {item?.paid ? (
                              <button
                                disabled={true}
                                className="btn md:btn-md btn-sm   btn-warning  text-white font-semibold"
                              >
                                Paid
                              </button>
                            ) : (
                              <Link
                                to={`/dashboard/payment/${item?._id}`}
                                className="btn md:btn-md btn-sm  btn-warning  text-white font-semibold"
                              >
                                Pay
                              </Link>
                            )}
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
        {myBooking?.data?.length === 0 ? (
          <h2 className="text-center mt-10 text-secondary text-xl font-semibold">
            No Item Found
          </h2>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default MyBookings;
