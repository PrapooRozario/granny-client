import { Field } from "@/components/ui/field";
import { useAuth } from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import { Input, Textarea } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AddFood = () => {
  const { user } = useAuth();
  const Axios = useAxios();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const price = form.price.value;
    const foodCategory = form.foodCategory.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const foodOrigin = form.foodOrigin.value;
    const foodImage = form.foodImage.value;
    const added_by = { name: user?.displayName, email: user?.email };

    const food = {
      foodName,
      foodImage,
      foodCategory,
      price: parseInt(price),
      purchaseCount: 0,
      quantity: parseInt(quantity),
      foodOrigin,
      description,
      added_by,
    };

    mutate(food);
  };
  const { mutate, isPending } = useMutation({
    mutationFn: (foodAdd) => {
      return Axios.post(`/foods/add`, foodAdd);
    },
    onSuccess: () => {
      toast.success("Food Added Successfully!", {
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
    <div className="flex items-center my-10 justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-xl p-10 w-full max-w-lg"
      >
        <h1 className="text-center font-bold text-3xl mb-8 text-gray-800 dark:text-white">
          Add Food
        </h1>

        <Field label="Food Name" required className="mb-6 text-gray-800 dark:text-white">
          <Input
            name="foodName"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full dark:bg-gray-700 dark:text-white"
            placeholder="Enter the food name"
          />
        </Field>

        <Field label="Food Image" required className="mb-6 text-gray-800 dark:text-white">
          <Input
            name="foodImage"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full dark:bg-gray-700 dark:text-white"
            placeholder="Enter the food image"
          />
        </Field>

        <Field label="Food Category" required className="mb-6 text-gray-800 dark:text-white">
          <Input
            name="foodCategory"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full dark:bg-gray-700 dark:text-white"
            placeholder="Enter the food category"
          />
        </Field>

        <Field label="Quantity" required className="mb-6 text-gray-800 dark:text-white">
          <Input
            name="quantity"
            type="number"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full dark:bg-gray-700 dark:text-white"
            placeholder="Enter the quantity"
          />
        </Field>

        <Field label="Price" required className="mb-6 text-gray-800 dark:text-white">
          <Input
            name="price"
            type="number"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full dark:bg-gray-700 dark:text-white"
            placeholder="Enter the price"
          />
        </Field>

        <Field label="Food Origin" required className="mb-6 text-gray-800 dark:text-white">
          <Input
            name="foodOrigin"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full dark:bg-gray-700 dark:text-white"
            placeholder="Enter the food origin"
          />
        </Field>

        <Field label="Description" required className="mb-6 text-gray-800 dark:text-white">
          <Textarea
            name="description"
            className="p-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Write a description..."
          ></Textarea>
        </Field>

        <button className="bg-yellow-500 w-full gap-2 flex items-center justify-center text-black dark:text-white font-medium py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
          {isPending && (
            <img
              className="w-5 h-5 animate-spin"
              src="https://www.svgrepo.com/show/448500/loading.svg"
              alt="Loading icon"
            />
          )}
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
