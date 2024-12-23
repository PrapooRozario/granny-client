import { useAuth } from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa6";

const MyOrders = () => {
  const { user } = useAuth();
  const Axios = useAxios();

  const queryClient = useQueryClient();

  const { data: totalPurchase } = useQuery({
    queryKey: ["Count"],
    queryFn: async () => {
      const { data } = await Axios.get(`/foods/count/${user?.email}`);
      return data;
    },
  });

  const totalPage = Math.ceil(totalPurchase?.count / 6);
  const [currentPage, setCurrentPage] = useState(0);

  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders", currentPage],
    queryFn: async () => {
      const { data } = await Axios.get(
        `/foods/orders/${user?.email}?page=${currentPage}&size=${6}`
      );
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (id) => await Axios.delete(`/purchase/delete/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries("orders");
      toast.success("Food order deleted Successfully!", {
        duration: 3000,
      });
    },
    onError: () => {
      toast.error("Something went wrong! Please try again.", {
        duration: 3000,
      });
    },
  });

  return (
    <div className="my-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold mb-4 text-black">My Orders</h1>
        <p className="text-lg text-black/60">
          Track your placed orders and manage your food journey effortlessly.
        </p>
      </div>
      {isLoading ? (
        <div className="border-gray-300 h-12 w-12 mx-auto my-10 animate-spin rounded-full border-8 border-t-yellow-600" />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
          {orders?.map((order) => (
            <div
              key={order?._id}
              className="flex flex-col bg-white border border-slate-200 rounded-lg"
            >
              <div className="h-60 overflow-hidden rounded-t-md">
                <img
                  src={order?.foodImage}
                  alt={order?.foodName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {order?.foodName}
                </h3>
                <p className="mb-2">
                  Price: <span className="font-medium">${order?.price}</span>
                </p>
                <p className="text-sm text-black/60">
                  Owner:{" "}
                  <span className="font-medium">{order?.added_by?.name}</span>
                </p>
                <p className="text-sm text-black/60">
                  Email:{" "}
                  <span className="font-medium">{order?.added_by?.email}</span>
                </p>
                <p className="text-black/60 mt-3">
                  Purchased on:{" "}
                  <span className="font-medium">{order?.buying_date}</span>
                </p>
              </div>

              <div className="flex justify-end p-4 border-t border-gray-200">
                <button
                  onClick={() => mutate(order?._id)}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-red-500 rounded-md shadow hover:bg-red-600"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          disabled={currentPage <= 0} 
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          className="py-2 px-5 font-medium bg-yellow-400 rounded-lg"
        >
          Previous
        </button>
        <p className="font-medium">Page {currentPage + 1}</p>
        <button
          disabled={currentPage >= totalPage - 1}
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPage - 1, prev + 1))
          }
          className="py-2 px-5 font-medium bg-yellow-400 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
