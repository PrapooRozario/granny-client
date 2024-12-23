import { BoxIcon } from "lucide-react";
import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa6";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input, Textarea } from "@chakra-ui/react";
import { Field } from "./ui/field";
import { useAuth } from "@/hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "@/hooks/useAxios";
import toast from "react-hot-toast";

const UserFoodCard = ({ food }) => {
  const { user } = useAuth();
  const Axios = useAxios();
  const queryClient = useQueryClient();
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

    const updatedFood = {
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
    mutate(updatedFood);
  };
  const { mutate, isPending } = useMutation({
    mutationFn: (foodUpdate) => {
      return Axios.patch(`/foods/update/${food?._id}`, foodUpdate);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["foods"]);
      toast.success("Food Updated Successfully!", {
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
    <div className="flex flex-col bg-white border border-slate-200 rounded-lg h-full">
      <div className="h-56 m-2.5 overflow-hidden text-white dark:text-black rounded-md">
        <img
          src={food?.foodImage}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-grow p-4">
        <p className="text-sm bg-yellow-100 dark:text-black font-medium w-fit px-3 py-1 rounded-full mb-2">
          {food?.foodCategory}
        </p>

        <h6 className="text-xl font-semibold text-slate-800 mb-2">
          {food?.foodName}
        </h6>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
          {food?.description}
        </p>

        <p className="flex items-center font-medium text-sm text-slate-800 gap-2 mt-4">
          <BoxIcon className="text-xl" /> Quantity: {food?.quantity}
        </p>
      </div>

      <div className="p-4 flex items-center justify-between">
        <p className="flex items-center text-lg font-medium text-slate-800 gap-1">
          <FaDollarSign /> {food?.price}
        </p>

        <DialogRoot>
          <DialogTrigger asChild>
            <button
              className="rounded-md bg-yellow-500 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg"
              type="button"
            >
              Update
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center text-black dark:text-white  font-bold text-3xl">
                Update Food
              </DialogTitle>
            </DialogHeader>
            <DialogBody>
              <form onSubmit={handleSubmit} className="mt-4">
                <Field label="Food Name" required className="mb-6">
                  <Input
                    name="foodName"
                    defaultValue={food?.foodName}
                    className="px-3 py-2 border border-gray-300 dark:placeholder-white  rounded-lg w-full"
                    placeholder="Enter the food name"
                  />
                </Field>

                <Field label="Food Image" required className="mb-6">
                  <Input
                    name="foodImage"
                    defaultValue={food?.foodImage}
                    className="px-3 py-2 border border-gray-300 dark:placeholder-white  rounded-lg w-full"
                    placeholder="Enter the food image"
                  />
                </Field>

                <Field label="Food Category" required className="mb-6">
                  <Input
                    name="foodCategory"
                    defaultValue={food?.foodCategory}
                    className="px-3 py-2 border border-gray-300 dark:placeholder-white  rounded-lg w-full"
                    placeholder="Enter the food category"
                  />
                </Field>

                <Field label="Quantity" required className="mb-6">
                  <Input
                    name="quantity"
                    defaultValue={food?.quantity}
                    type="number"
                    className="px-3 py-2 border border-gray-300 dark:placeholder-white  rounded-lg w-full"
                    placeholder="Enter the quantity"
                  />
                </Field>

                <Field label="Price" required className="mb-6">
                  <Input
                    name="price"
                    type="number"
                    defaultValue={food?.price}
                    className="px-3 py-2 border border-gray-300 dark:placeholder-white  rounded-lg w-full"
                    placeholder="Enter the price"
                  />
                </Field>

                <Field label="Food Origin" required className="mb-6">
                  <Input
                    name="foodOrigin"
                    defaultValue={food?.foodOrigin}
                    className="px-3 py-2 border border-gray-300 dark:placeholder-white  rounded-lg w-full"
                    placeholder="Enter the food origin"
                  />
                </Field>

                <Field label="Description" required className="mb-6">
                  <Textarea
                    name="description"
                    defaultValue={food?.description}
                    className="p-2 border border-gray-300 dark:placeholder-white  rounded-lg w-full"
                    placeholder="Write a description..."
                  ></Textarea>
                </Field>

                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <button
                      className="rounded-md bg-slate-300 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg"
                      type="button"
                    >
                      Cancel
                    </button>
                  </DialogActionTrigger>
                  <button
                    type="submit"
                    className="rounded-md flex items-center gap-2 bg-yellow-500 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg"
                  >
                    {isPending && (
                      <img
                        className="w-4 h-4 animate-spin"
                        src="https://www.svgrepo.com/show/448500/loading.svg"
                        alt="Loading icon"
                      />
                    )}
                    Save
                  </button>
                </DialogFooter>
              </form>
            </DialogBody>

            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>
      </div>
    </div>
  );
};
UserFoodCard.propTypes = {
  food: PropTypes.object,
};
export default UserFoodCard;
