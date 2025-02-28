import { useEffect, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <motion.div
      initial={{ position: "relative" }}
      animate={
        navbar ? { position: "sticky", top: 0 } : { position: "relative" }
      }
      className={`w-full bg-gradient-radial ${
        navbar ? "border-b border-white border-opacity-5" : ""
      }`}
    >
      <motion.div
        className={`main-container flex items-center justify-between w-full py-8 z-50`}
      >
        <Link
          to="heroSection"
          smooth={true}
          offset={-110}
          duration={200}
          activeClass="active"
          className="flex items-center space-x-3 cursor-pointer"
        >
          <img
            src="/static/images/logo.svg"
            alt="Suraj Rauda"
            className="w-16"
          />
          <h3 className="text-3xl text-white font-light hidden md:flex">
            SURAJ<span className="font-semibold">RAUDA</span>
          </h3>
        </Link>
        <div className="flex text-[#5C637C] items-center space-x-3">
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="heroSection"
              spy={true}
              smooth={true}
              offset={-110}
              duration={200}
              activeClass="active"
              className="navLink"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="navLink"
            >
              About
            </Link>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="navLink"
            >
              Resume
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="navLink"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="navLink"
            >
              Contact
            </Link>
          </div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="bg-white text-[#010203] border border-transparent hover:border-nik-dark hover:bg-nik-lightGray transition-all hover:text-nik-dark focus:outline-none uppercase px-5 py-3 rounded-xl cursor-pointer"
          >
            Hire me
          </Link>
          <button
            className="lg:hidden bg-[#5C637C] border border-transparent hover:shadow-md hover:border-gray-200 focus:outline-none font-medium text-white p-3.5 rounded-xl text-xl"
            onClick={() => setSidebar(true)}
          >
            <RiMenuLine />
          </button>
        </div>

        <motion.div
          className="z-50  flex  w-full items-center lg:hidden fixed top-0 h-screen"
          initial={{ opacity: 0, x: "-100%" }}
          animate={sidebar ? "open" : "closed"}
          variants={variants}
        >
          <div className="flex items-center h-screen px-4 w-80 sm:w-96 bg-gradient-radial flex-col overflow-y-scroll hide-scrollbar shadow-2xl bg-opacity-60 backdrop-filter backdrop-blur-md">
            <div className="flex items-center justify-between py-8 w-full">
              <div className="flex items-center space-x-2">
                <img
                  src="/static/images/logo.svg"
                  alt="Suraj Rauda"
                  className="w-10 sm:w-12"
                />
                <h3 className="text-2xl text-white font-light">
                  RAUDA<span className="font-semibold">SURAJ</span>
                </h3>
              </div>

              <button
                className="lg:hidden bg-white border border-transparent hover:shadow-md hover:border-gray-200  focus:outline-none font-medium text-gray-500 p-3.5 rounded-lg text-xl"
                onClick={() => setSidebar(false)}
              >
                <IoMdClose />
              </button>
            </div>

            {/* Mobile First Menu */}
            <div className="flex flex-col items-center space-y-2 w-full py-5">
              <Link
                to="heroSection"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                activeClass="active"
                className="sidebar-link"
                onClick={() => setSidebar(false)}
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                activeClass="active"
                className="sidebar-link"
                onClick={() => setSidebar(false)}
              >
                About
              </Link>
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                activeClass="active"
                className="sidebar-link"
                onClick={() => setSidebar(false)}
              >
                Resume
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                activeClass="active"
                className="sidebar-link"
                onClick={() => setSidebar(false)}
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                activeClass="active"
                className="sidebar-link"
                onClick={() => setSidebar(false)}
              >
                Contact
              </Link>
            </div>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="text-gray-100 focus:outline-none font-medium bg-[#5C637C] px-5 text-lg py-3 rounded-lg w-full cursor-pointer hover:shadow-lg text-center mt-3 mb-8"
              onClick={() => setSidebar(false)}
            >
              Hire me
            </Link>
          </div>

          <div
            className="flex-grow bg-black h-screen bg-opacity-25"
            onClick={() => setSidebar(false)}
          ></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Nav;
