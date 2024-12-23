import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import FoodCard from "./FoodCard";

const ExpensiveDishes = () => {
  const Axios = useAxios();

  const { data: foods, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data } = await Axios.get("/foods");
      return data;
    },
  });
  return (
    <div>
      {isLoading ? (
        <div className="border-gray-300 h-12 w-12 mx-auto mt-10 animate-spin rounded-full border-8 border-t-yellow-600" />
      ) : (
        <div>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold mb-4 text-black dark:text-white">
              Expensive Dishes
            </h1>
            <p className="text-lg text-black/60 dark:text-white/60">
              Explore Our Finest and Most Exquisite Culinary Masterpieces,
              Crafted for a Premium Dining Experience!
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
            {foods
              ?.sort((a, b) => b?.price - a?.price)
              ?.slice(0, 6)
              ?.map((food) => (
                <FoodCard key={food} food={food}></FoodCard>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpensiveDishes;
