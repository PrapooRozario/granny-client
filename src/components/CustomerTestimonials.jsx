import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";

const CustomerTestimonials = () => {
  const Axios = useAxios();

  const { data: testimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await Axios.get("/testimonials");
      return data;
    },
  });
  return (
    <div>
      <div className="text-center mb-4">
        <h1 className="text-4xl font-semibold mb-4 dark:text-white text-black">
          Customer Testimonials
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60">
          Hear What Our Happy Customers Have to Say About Their Unforgettable
          Dining Experiences!
        </p>
      </div>
      <div>
        <Marquee gradient={true} gradientWidth={100}>
          {testimonials?.map((testimonial) => (
            <div key={testimonial._id} className="ml-6">
              <div className="flex w-full p-4 max-w-lg flex-col rounded-lg dark:bg-gray-800 bg-white border dark:border-gray-700 border-slate-200 my-6">
                <div className="flex items-center gap-4 dark:text-white text-black">
                  <img
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                  />
                  <div className="flex w-full flex-col">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xl font-semibold dark:text-white text-black">
                        {testimonial?.name}
                      </h5>
                    </div>
                    <p className="text-xs uppercase font-bold dark:text-white/60 text-black/60 mt-0.5">
                      {testimonial?.profession}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-base dark:text-white/60 text-black/60 font-light leading-normal">
                    "{testimonial?.testimonial}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
