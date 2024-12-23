import { Field } from "@/components/ui/field";
import { useAuth } from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import { Input } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const FoodPurchase = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const Axios = useAxios();
  const { user } = useAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: (newPurchase) => {
      return Axios.post(
        `/foods/purchases?job_id=${food?._id}&quantity=${newPurchase.quantity}`,
        newPurchase
      );
    },
    onSuccess: () => {
      toast.success("Purchase Successful!", {
        duration: 3000,
      });
      navigate(state ? state : "/");
    },
    onError: () => {
      toast.error("Something went wrong! Please try again.", {
        duration: 3000,
      });
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const buying_date = moment().format("LLL");
    const form = e.target;
    const foodName = form.foodName.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const buyer_email = form.buyer_email.value;
    const buyer_name = form.buyer_name.value;

    if (food?.added_by?.email === user?.email) {
      return toast.error(
        "You cannot purchase this item because you are the one who added it.",
        {
          duration: 3000,
        }
      );
    }

    if (quantity > food?.quantity) {
      return toast.error(
        "Please enter a quantity that is within the available limit.",
        {
          duration: 3000,
        }
      );
    }

    if (food?.quantity <= 0) {
      return toast.error(
        "This item is currently out of stock and cannot be purchased.",
        {
          duration: 3000,
        }
      );
    }

    const purchase = {
      foodName,
      price: parseInt(price),
      quantity: parseInt(quantity),
      food_id: food?._id,
      buyer_email,
      buyer_name,
      buying_date,
    };
    console.log(purchase);
    if (food?.quantity > 0) {
      mutate(purchase);
    }
  };
  const { data: food } = useQuery({
    queryKey: ["food"],
    queryFn: async () => {
      const { data } = await Axios.get(`/foods/details/${id}`);
      return data;
    },
  });

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl p-10 w-full max-w-lg"
      >
        <h1 className="text-center font-bold text-3xl mb-8 text-gray-800">
          Purchase Now
        </h1>

        <Field label="Food Name" required className="mb-6">
          <Input
            name="foodName"
            value={food?.foodName}
            className="px-3 py-2 border border-gray-300 rounded-lg w-full"
            placeholder="Enter the food name"
          />
        </Field>

        <Field label="Price" required className="mb-6">
          <Input
            name="price"
            type="number"
            value={food?.price}
            className="px-3 py-2 border border-gray-300 rounded-lg w-full"
            placeholder="Enter the price"
          />
        </Field>

        <Field label="Quantity" required className="mb-6">
          <Input
            name="quantity"
            type="number"
            defaultValue={food?.quantity}
            className="px-3 py-2 border border-gray-300 rounded-lg w-full"
            placeholder="Enter the quantity"
          />
        </Field>

        <Field label="Buyer Name" required className="mb-6">
          <Input
            name="buyer_name"
            className="px-3 py-2 border border-gray-300 rounded-lg w-full"
            placeholder="Enter the name"
            value={user?.displayName}
          />
        </Field>

        <Field label="Buyer Email" required className="mb-6">
          <Input
            name="buyer_email"
            value={user?.email}
            className="px-3 py-2 border border-gray-300 rounded-lg w-full"
            placeholder="Enter the email"
          />
        </Field>

        <button
          disabled={
            food?.quantity <= 0 || food?.added_by?.email === user?.email
          }
          className="bg-yellow-500 w-full gap-2 flex items-center justify-center text-black font-medium py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
        >
          {isPending && (
            <img
              className="w-5 h-5 animate-spin"
              src="https://www.svgrepo.com/show/448500/loading.svg"
              alt="Loading icon"
            />
          )}
          Confirm Purchase
        </button>
      </form>
    </div>
  );
};

export default FoodPurchase;
