import axios from "axios";
import { useQuery } from "react-query";
import LoadingData from "../Loading/LoadingData";

const ManageBabySitter = () => {
  const getData = async () => {
    return await axios.get("http://localhost:5000/api/baby-sitter");
  };
  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ["manageAllBabySitter", 1],
    queryFn: getData,
  });
  if (isLoading) {
    return (
      <div className=" mt-10">
        <LoadingData />;
      </div>
    );
  }
  console.log(data);

  const deleteItem = async (id) => {
    const sure = window.confirm("Are you sure? You want to delete!");
    if (sure) {
      const url = `http://localhost:5000/api/baby-sitter/${id}`;

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
                        <p>Manage Baby Sitter</p>
                      </th>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                      <th className="px-6 py-3 text-center font-medium">
                        Baby Sitter Info
                      </th>
                      <th className="px-6 py-3 text-center font-medium">
                        Name
                      </th>
                      <th className="px-6 py-3  font-medium text-center">
                        Booking Price
                      </th>

                      <th className="px-6 py-3 text-center font-medium">
                        Delete
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {data?.data?.map((babySitter) => (
                      <tr key={babySitter?._id}>
                        <td className="px-6 py-4 flex flex-col whitespace-no-wrap border-b border-gray-200">
                          <div className="flex justify-center items-center">
                            <img
                              className=" h-10 w-10 rounded-full"
                              src={babySitter?.pic}
                              alt="product"
                            />
                          </div>
                          <h1 className=" text-center">{babySitter?.email}</h1>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">
                            <div className="flex flex-col items-center  justify-center">
                              <div>{babySitter?.name}</div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 text-center py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          <div className="flex flex-col items-center">
                            <p>$ {babySitter?.price} USD</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                          <div className="flex justify-center items-center">
                            <button
                              onClick={() => deleteItem(babySitter._id)}
                              className="block  bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                            >
                              Delete
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
            <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="border-b border-gray-200 font-thin bg-white leading-4 tracking-wider text-base text-gray-500">
                      <th className="px-6 py-5 text-left" colSpan="100%">
                        <p>Manage Baby Sitter</p>
                      </th>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                      <th className="px-6 py-3 text-center font-medium">
                        Info
                      </th>

                      <th className="px-6 py-3 text-center font-medium">
                        Delete
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {data?.data?.map((babySitter) => (
                      <tr key={babySitter._id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">
                            <div className="flex flex-col items-center  justify-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={babySitter?.pic}
                                  alt="product"
                                />
                              </div>
                              <div>
                                {babySitter?.name.length > 10
                                  ? `${babySitter?.name.slice(0, 10)}..`
                                  : babySitter?.name}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                          <div className="flex justify-center items-center">
                            <button
                              onClick={() => deleteItem(babySitter._id)}
                              className="block  bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                            >
                              Delete
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
        {data?.data?.length === 0 ? (
          <h2 className="text-center mt-10 text-blue-500 text-xl font-semibold">
            No Item Found
          </h2>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ManageBabySitter;
