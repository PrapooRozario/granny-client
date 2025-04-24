import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BannerContent = ({ bgImage, title, subtitle }) => {
  return (
    <div
      className="hero min-h-[calc(100vh-150px)] font-ubuntu rounded-3xl"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-white text-center">
        <div>
          <h1 className="mb-4 text-4xl font-bold">{title}</h1>
          <p className="mb-4 text-white/70">{subtitle}</p>
          <Link to="/all/foods">
            <button className="px-8 font-medium py-3 bg-yellow-400 text-black rounded-lg">
              All Foods
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
BannerContent.propTypes = {
  bgImage: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default BannerContent;
