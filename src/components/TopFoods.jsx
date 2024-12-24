import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const Axios = useAxios();

  const { data: foods, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data } = await Axios.get("/foods");
      return data;
    },
  });
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold mb-4 text-black dark:text-white">
          Top Foods
        </h1>
        <p className="text-lg text-black/60  dark:text-white/60">
          Explore Our Most Popular Dishes, Loved by Customers for Their
          Unforgettable Taste and Quality.
        </p>
      </div>
      {isLoading ? (
        <div className="border-gray-300 h-12 w-12 mx-auto mt-10 animate-spin rounded-full border-8 border-t-yellow-600" />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          {foods
            ?.sort((a, b) => b?.purchaseCount - a?.purchaseCount)
            ?.slice(0, 6)
            ?.map((food) => (
              <div key={food._id}>
                <FoodCard food={food} />
              </div>
            ))}
        </div>
      )}
      <div className="text-center mt-8">
        <Link to="/all/foods">
          <button className=" text-black dark:text-white font-semibold py-3 px-8 rounded-xl bg-yellow-400">
            See All Foods
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
