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
    <div className="flex flex-col bg-white border border-slate-200 rounded-lg">
      <div className="h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img src={foodImage} alt="card-image" />
          </div>
          
      <div className="p-4">
        <p className="text-sm bg-yellow-100 font-medium w-fit px-3 py-1 rounded-full my-2">
          {foodCategory}
        </p>
        <h6 className="mb-2 text-xl font-semibold">{foodName}</h6>
        <p className="leading-normal font-light line-clamp-2">{description}</p>
      <p className="flex items-center font-medium gap-2 mt-4">
        <BoxIcon className="text-xl"></BoxIcon> Quantity : {quantity}
      </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2 flex items-center justify-between">
        <p className="text-black flex items-center text-xl font-medium">
          <FaDollarSign></FaDollarSign> {price}
        </p>
        <Link
          to={`/food/details/${_id}`}
          className="rounded-md bg-yellow-500 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg"
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
