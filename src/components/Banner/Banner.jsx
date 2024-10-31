/* eslint-disable react/prop-types */
import bg from "./../../assets/bg-shadow.png";
import banner from "./../../assets/banner-main.png";

const Banner = ({ handleCoins }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="flex flex-col justify-center items-center space-y-8 py-20 h-full mt-5 bg-center bg-no-repeat bg-cover rounded-2xl bg-black"
    >
      <img src={banner} alt="" />
      <h1 className="text-4xl font-bold text-white max-sm:text-2xl text-center">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <h3 className="text-2xl font-bold text-white opacity-50 max-sm:text-lg text-center">
        Beyond Boundaries Beyond Limits
      </h3>
      <div className="p-2 border-2 border-[#E7FE29] rounded-xl hover:bg-white hover:bg-opacity-20 duration-500">
        <button className="btn btn-xl bg-[#E7FE29]" onClick={handleCoins}>
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
