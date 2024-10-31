import footerLogo from "./../../assets/logo-footer.png";
import bgFooter from "./../../assets/bg-shadow.png";


const Footer = () => {
  return (
    <div className="w-full bg-[#06091A] pt-56 mt-80 relative">
      <div className="w-[85%] max-sm:w-[90%] mx-auto absolute bottom-[75%] max-sm:bottom-[85%] left-[7.5%] max-sm:left-[5%] p-6 rounded-3xl border-2 border-white bg-white bg-opacity-15">
        <div
          style={{ backgroundImage: `url(${bgFooter})` }}
          className="flex flex-col justify-center space-y-5 items-center py-20 max-sm:py-14 rounded-3xl bg-no-repeat bg-cover bg-center bg-white"
        >
          <h3 className="text-3xl font-bold max-sm:text-xl">
            Subscribe to our Newsletter
          </h3>
          <p className="font-semibold text-xl opacity-60 max-sm:text-base text-center">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="space-x-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered"
            />
            <button className="btn btn-primary border-none text-black bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-16">
        <img src={footerLogo} alt="" />
      </div>
      <div className="max-w-[85%] mx-auto grid grid-cols-3 max-md:grid-cols-1 gap-16 text-white">
        <div>
          <h3 className="text-lg">About Us</h3>
          <p className="opacity-50 mt-3 lg:w-[70%]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div>
          <h3 className="text-lg">Quick Links</h3>
          <ul className="opacity-50 list-disc ml-4 mt-3 space-y-1">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg">Subscribe</h3>
          <p className="opacity-50 mt-3 mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="join">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered join-item "
            />
            <div className="btn btn-primary border-none rounded-r-lg join-item text-black bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-400">
              Subscribe
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full mt-7 opacity-40" />
      <p className="text-center py-7 text-white opacity-50">
        @2024 Player Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
