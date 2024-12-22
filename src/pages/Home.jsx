import Banner from "@/components/Banner";
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
    </div>
  );
};

export default Home;
