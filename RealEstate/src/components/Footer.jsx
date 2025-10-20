import { Link } from "react-router-dom";
import { assets } from "../assets/data";

const Footer = () => {
  return (
    <footer className="text-gray-500/80 pt-16 xl:pt-20 w-full bg-[#fffbee]">
      <div className="max-padd-container flex flex-wrap justify-between gap-12 md:gap-6">
        {/* Logo & Description */}
        <div className="max-w-80">
          <Link to="/">
            <img
              src={assets.logoImg}
              alt="Logo"
              className="mb-4 h-11"
            />
          </Link>
          <p className="text-sm">
            Experience modern living through well-presented properties,
            professional support, and thoughtfully designed spaces.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <img src={assets.facebook} alt="Facebook" className="w-6 h-6" />
            <img src={assets.instagram} alt="Instagram" className="w-6 h-6" />
            <img src={assets.twitter} alt="Twitter" className="w-6 h-6" />
            <img src={assets.linkedin} alt="LinkedIn" className="w-6 h-6" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <p className="h4 text-black/80">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <p className="h4 text-black/80">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Information</a></li>
            <li><a href="#">Cancellation Options</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="max-w-80">
          <p className="h4 text-black/80">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Your email"
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none text-sm"
            />
            <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <hr className="border-gray-300 mt-8" /> */}

      {/* Bottom */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm mt-5 ml-3">
        <p >
          © {new Date().getFullYear()} <a href="" className="underline">Nestoria</a>. All rights reserved.
        </p>
        <ul className="flex items-center gap-4 mr-5">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
