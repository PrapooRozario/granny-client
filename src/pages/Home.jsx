import Banner from "@/components/Banner";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import ExpensiveDishes from "@/components/ExpensiveDishes";
import TopFoods from "@/components/TopFoods";

const Home = () => {
  return (
    <div>
      <section className="my-5">
        <Banner></Banner>
      </section>
      <section className="my-16">
        <TopFoods></TopFoods>
      </section>
      <section className="mb-16">
        <ExpensiveDishes></ExpensiveDishes>
      </section>
      <section>
        <CustomerTestimonials></CustomerTestimonials>
      </section>
    </div>
  );
};

export default Home;
