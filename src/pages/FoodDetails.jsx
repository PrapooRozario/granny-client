import { FaChartLine } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const FoodDetails = () => {
  const { data: food } = useLoaderData();
  return (
    <div>
      <div className="w-4/5 mx-auto p-6 my-20 bg-white dark:bg-[#1f2937] rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <img
              src={food?.foodImage}
              alt={food?.foodName}
              className="w-full rounded-lg object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              {food?.foodName}
            </h1>
            <p className="text-sm bg-yellow-100  dark:text-black font-medium w-fit px-3 py-1 rounded-full">
              {food?.foodCategory}
            </p>

            <p className="text-black  dark:text-white leading-relaxed">
              {food?.description}
            </p>

            <div className="space-y-2">
              <p className="text-lg text-black  dark:text-white">
                <span className="font-semibold">Price:</span> ${food?.price}
              </p>
              <p className="text-black  dark:text-white">
                <span className="font-semibold">Origin: </span>
                {food?.foodOrigin}
              </p>
              <p className="text-black  dark:text-white flex items-center gap-2">
                <FaShoppingCart className="text-yellow-500" />
                <span className="font-semibold">Quantity: </span>
                {food?.quantity}
              </p>
              <p
                className="text-black  dark:text-white flex items-
               gap-2"
              >
                <FaChartLine className="text-green-500" />
                <span className="font-semibold">Purchases: </span>
                {food?.purchaseCount}
              </p>
            </div>

            <Link to={`/food/purchase/${food?._id}`}>
              <button className="bg-yellow-500 text-black  dark:text-white px-6 mt-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Purchase Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
