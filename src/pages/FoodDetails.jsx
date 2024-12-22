import { FaChartLine } from "react-icons/fa6";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const FoodDetails = () => {
  const { data: food } = useLoaderData();
  const location = useLocation();
  return (
    <div>
      <div className="w-4/5 mx-auto p-6 my-6 bg-white rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <img
              src={food?.foodImage}
              alt={food?.foodName}
              className="w-full rounded-lg object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {food?.foodName}
            </h1>
            <p className="text-sm bg-yellow-100 font-medium w-fit px-3 py-1 rounded-full">
              {food?.foodCategory}
            </p>

            <p className="text-black leading-relaxed">{food?.description}</p>

            <div className="space-y-2">
              <p className="text-lg text-black">
                <span className="font-semibold">Price:</span> ${food?.price}
              </p>
              <p className="text-black">
                <span className="font-semibold">Origin: </span>
                {food?.foodOrigin}
              </p>
              <p className="text-black flex items-center gap-2">
                <FaShoppingCart className="text-yellow-500" />
                <span className="font-semibold">Quantity: </span>
                {food?.quantity}
              </p>
              <p
                className="text-black flex items-
               gap-2"
              >
                <FaChartLine className="text-green-500" />
                <span className="font-semibold">Purchases: </span>
                {food?.purchaseCount}
              </p>
            </div>

            <Link state={location?.pathname} to={`/food/purchase/${food?._id}`}>
              <button className="bg-yellow-500 text-black px-6 mt-4 py-2 rounded-lg hover:bg-yellow-600 transition">
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
