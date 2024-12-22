import FoodCard from "@/components/FoodCard";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const AllFoods = () => {
  const Axios = useAxios();
  const [search, setSearch] = useState("");
  const { data: foods, isLoading } = useQuery({
    queryKey: ["foods", search],
    queryFn: async () => {
      const { data } = await Axios.get(`/foods?search=${search}`);
      return data;
    },
  });
  return (
    <div>
      <div
        className="hero h-56 my-4"
        style={{
          backgroundImage:
            "url(https://images.deccanherald.com/deccanherald%2F2023-10%2F19b5f132-bce9-4094-a967-d105462dddb1%2Ffile7s9pratl4hzqeit2dwt.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center">
          <h1 className="mb-5 text-5xl font-bold text-white">All Foods</h1>
        </div>
      </div>
      <div className="w-1/2 mx-auto mt-6">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          placeholder="Search for delicious food..."
        />
      </div>

      {isLoading ? (
        <div className="border-gray-300 h-12 w-12 mx-auto mt-10 animate-spin rounded-full border-8 border-t-yellow-600" />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
          {foods?.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFoods;
