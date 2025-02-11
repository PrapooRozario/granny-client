import FoodCard from "@/components/FoodCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const AllFoods = () => {
  const Axios = useAxios();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const { data: foods, isLoading } = useQuery({
    queryKey: ["foods", search, sort],
    queryFn: async () => {
      const { data } = await Axios.get(`/foods?search=${search}&sort=${sort}`);
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
      <div className="lg:w-1/2 md:w-2/3 mx-auto mt-6 flex items-center gap-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          placeholder="Search for delicious food..."
        />
        <Select onValueChange={(e)=>setSort(e)}>
          <SelectTrigger className="w-[180px] h-12">
            <SelectValue placeholder="Sort by price" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort Order</SelectLabel>
              <SelectItem value="desc">High to Low</SelectItem>
              <SelectItem value="asc">Low to High</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
