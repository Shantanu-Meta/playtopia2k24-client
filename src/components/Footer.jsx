import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="h-screen lg:h-full w-full relative bg-gray-800 pt-[80px] lg:pt-0">
      <div className="h-full w-full px-6 py-10 ">
        <div className="lg:flex w-full">
          <div className="w-full  lg:w-2/5">
            <div className="px-6 flex justify-evenly items-center">
              <a href="#">
                <img
                  className="w-auto h-[70px]"
                  src="/iemLogo.png"
                  alt="iem logo"
                />
              </a>
              <a href="#">
                <img
                  className="w-auto h-[120px]"
                  src="/Logo.svg"
                  alt="playtopia logo"
                />
              </a>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1 ">
            <div className="textArea grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
              <div className="">
                <div>
                  <h3 className="uppercase text-white ">Faculty Coordinator</h3>
                </div>
                <div>
                  <p
                    className="block mt-2 text-sm  text-gray-400 "
                  >
                    Nayantara Mitra
                  </p>
                  <p
                    className="block mt-2 text-sm text-gray-400 "
                  >
                    Ankan Bhowmik
                  </p>
                  <p
                    className="block mt-2 text-sm text-gray-400 "
                  >
                    Biswajit Maity
                  </p>
                  <p
                    className="block mt-2 text-sm text-gray-400 "
                  >
                    Sourav Pramanik
                  </p>
                  <p
                    className="block mt-2 text-sm text-gray-400 "
                  >
                    Priyanka Das
                  </p>
                </div>
              </div>
              <div>
                <h3 className=" uppercase text-white">Student Coordinator</h3>
                <p className="block mt-2 text-sm text-gray-400 hover:underline">
                  {" "}
                  Arghajit Singha Roy
                </p>
                <a
                  href=" https://wa.me/8240886592"
                  className="text-sm text-gray-400"
                >
                   8240886592
                </a>

                <p className="block mt-2 text-sm text-gray-400 hover:underline">
                  Ayush Chakraborty{" "}
                </p>
                <a
                  href=" https://wa.me/7003227992"
                  className="text-sm text-gray-400"
                >
                   7003227992
                </a>

                <p className="block mt-2 text-sm text-gray-400 hover:underline">
                  Debahuti Banerjee
                </p>
                <a
                  href=" https://wa.me/9874512090"
                  className="text-sm text-gray-400"
                >
                   9874512090
                </a>
              </div>
              <div>
                <h3 className=" uppercase text-white">Socials</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm  text-gray-400 hover:underline"
                >
                  <i className="ri-whatsapp-line mr-2"></i>Instagram
                </a>
                
              </div>
              <div>
                <h3 className=" uppercase text-white">Location</h3>
                
                  <iframe
                    className="w-full  rounded-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.236881498857!2d88.42683317574301!3d22.57024203305585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b21911df59%3A0x9039fd6aa6c5833c!2sIEM%20Ashram%20Building%2C%20Street%20Number%2027%2C%20GN%20Block%2C%20Nalban%20Bheri%2C%20Dhapa%2C%20Kolkata%2C%20West%20Bengal%20700098!5e0!3m2!1sen!2sin!4v1709735748437!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-4  border-none bg-gray-700" />
        <div>
          <p className="text-center text-gray-400">
            © Playtopia 2024 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
