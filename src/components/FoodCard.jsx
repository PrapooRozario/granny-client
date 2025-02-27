import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BoxIcon } from "lucide-react";
const FoodCard = ({ food }) => {
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    description,
    quantity,
    price,
  } = food;
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg h-full">
      <div className="h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
          src={foodImage}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-grow p-4">
        <p className="text-sm bg-yellow-100 dark:bg-yellow-200 font-medium text-black w-fit px-3 py-1 rounded-full mb-2">
          {foodCategory}
        </p>

        <h6 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
          {foodName}
        </h6>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
          {description}
        </p>

        <p className="flex items-center font-medium text-sm text-slate-800 dark:text-slate-200 gap-2 mt-4">
          <BoxIcon className="text-xl" /> Quantity: {quantity}
        </p>
      </div>

      <div className="p-4 flex items-center justify-between">
        <p className="text-lg font-medium text-slate-800 dark:text-white flex items-center gap-1">
          <FaDollarSign /> {price}
        </p>

        <Link
          to={`/food/details/${_id}`}
          className="rounded-md bg-yellow-500 hover:bg-yellow-600 py-2 px-4 border border-transparent text-sm text-black dark:text-white transition-all shadow-md hover:shadow-lg"
          type="button"
        >
          View Food
        </Link>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
};

export default FoodCard;
