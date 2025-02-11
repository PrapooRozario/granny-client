import Banner from "@/components/Banner";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import ExpensiveDishes from "@/components/ExpensiveDishes";
import RecentProducts from "@/components/RecentProducts";
import TopFoods from "@/components/TopFoods";

const Home = () => {
  return (
    <div>
      <section className="my-16">
        <Banner></Banner>
      </section>
      <section className="mb-16">
        <TopFoods></TopFoods>
      </section>
      <section className="mb-16">
        <RecentProducts></RecentProducts>
      </section>
      <section className="mb-16">
        <ExpensiveDishes></ExpensiveDishes>
      </section>
      <section className="mb-16">
        <CustomerTestimonials></CustomerTestimonials>
      </section>
    </div>
  );
};

export default Home;
