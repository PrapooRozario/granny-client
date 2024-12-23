import UserFoodCard from "@/components/UserFoodCard";
import { useAuth } from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const MyFoods = () => {
  const { user } = useAuth();
  const Axios = useAxios();
  const { data: foods, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data } = await Axios.get(`/foods/add/${user?.email}`);
      return data;
    },
  });
  return (
    <div className="my-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold mb-4 text-black dark:text-white">
          My Foods
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60">
          Discover and manage all the delicious food items you've added to the
          Granny.
        </p>
      </div>
      {isLoading ? (
        <div className="border-gray-300 h-12 w-12 mx-auto mt-10 animate-spin rounded-full border-8 border-t-yellow-600" />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1">
          {foods?.map((food) => (
            <UserFoodCard key={food?._id} food={food}></UserFoodCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFoods;
