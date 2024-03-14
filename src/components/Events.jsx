import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Carousel.css"; 
import games from "./games";
import "../Styles/Fonts.css";


const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const defaultH1 = games[0].title;
  const defaultP = games[0].desc;
  const defaultBackgroundSrc = "/EventBg/Desktop/bgImg1.jpg";

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    setSelectedGame(index === activeIndex ? null : games[index]);
  };


  const [windowWidth, setWindowWidth] = useState({
    windowWidth: window.innerWidth,
  });

  const detectSize = () => {
    setWindowWidth({
      windowWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);
  return (
    <div className="h-screen w-full ">
      {windowWidth.windowWidth < 768 ? (
        <div
          id="screen"
          className="h-screen w-full relative bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${
              selectedGame ? selectedGame.src : defaultBackgroundSrc
            })`,
          }}
        >
          <div className="h-full w-full bg-black opacity-50 absolute"></div>
          <div className="text-white mx-8 pt-[120px] relative z-20">

          <div
            className="text-3xl mb-3"
          >
              {selectedGame ? selectedGame.title : defaultH1}
            
          </div>
          <div

            className="text-sm"
            
          >
              {selectedGame ? selectedGame.desc : defaultP}
            
          </div>
          <Link to={selectedGame?.route} >
                      <button className="flex justify-center rounded-lg w-[150px] bg-white h-[50px] my-3  items-center   cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black mt-5 bg-gradient-to-r from-amber-500 to-pink-500 font-bold ">
                        Register
                      </button>
          </Link>
          </div>
          

          <section className="game-section absolute bottom-0 left-0 ">
            <div className="carousel">
              {games.map((game, index) => (
                <div
                  key={index}
                  className={`item ${
                    index === activeIndex ? "active" : ""
                  } bg-cover bg-${game.position}`}
                  style={{ backgroundImage: `url(${game.src})` }}
                  onClick={() => handleClick(index)}
                >
                  <div className="item-desc">
                    <h3>{game.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="h-screen w-full relative">
          <div className="carousel w-full h-full bg-cover bg-center relative">
            <div
              id="item1"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg1.jpg')] bg-cover bg-center flex justify-start items-center text-white"
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0 font-[Valorant] ">
                  Valorant
                </h1>
                <p className="text-2xl md:text-xl my-6">
                Valorant is a free-to-play multiplayer first-person shooter game developed and published by Riot Games. It features tactical gameplay where players compete in teams to complete objectives. Each player selects a unique character with special abilities, adding strategic depth to the fast-paced matches. The game emphasizes teamwork, communication, and precise shooting mechanics.
                </p>
                <div className="w-full flex mt-12">
                  <Link to={"/valorantregister"}>
                    <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black text-[1rem]">
                      Register
                    </button>
                  </Link>
                </div>
           </div>
            </div>

            <div
              id="item2"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg2.jpg')] bg-cover bg-center flex justify-start items-center text-white"
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0 font-[PUBG]">
                  Battlegrounds Mobile India
                </h1>
                <p className="text-2xl md:text-xl my-6">
                Greetings, Battleground Champions! We are thrilled to welcome you to our exhilarating BGMI Tournament! As avid gamers and enthusiasts ourselves, we've crafted an electrifying event to celebrate the spirit of competition and camaraderie within the PUBG community.
                </p>
                <div className="w-full flex mt-12">
                  <Link to="/bgmiregister">
                  <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="item3"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg3.jpg')] bg-cover bg-center flex justify-start items-center text-white "
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0">8 Ball Pool</h1>
                <p className="text-2xl md:text-xl my-6">
                Step into the virtual world of 8ball pool! Show off your skills in precision and tactics. It's all about aiming, strategy and a dash of luck, making every shot a moment of thrilling excitement and fun. Let's grab the cue sticks and  break into the world of gaming!
                </p>
                <div className="w-full flex mt-12">
                  <Link to={"/ballpoolregister"}>
                  <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="item4"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg4.jpg')] bg-cover bg-center flex justify-start items-center text-white "
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0">Photography</h1>
                <p className="text-2xl md:text-xl my-6">
                Embark on a visual journey and let your passion for photography shine! We invite you to participate in our exciting photography competition, where you can unleash your creativity, capture breathtaking moments, and share your unique perspective with the world.
                </p>
                <div className="w-full flex mt-12">
                  <Link to={"/photographyregister"}>
                  <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="item5"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg5.jpg')] bg-cover bg-center flex justify-start items-center text-white "
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0">Business Hackathon</h1>
                <p className="text-2xl md:text-xl my-6">
                This Businwss Hackathon will help the youth to reach out to numerous young minds and market experts and will be able to enrich themselves with creativity and technical expertise . It invites the students to a platform that allows them to solve real-world problems faced by various government or private departments and organizations.
                </p>
                <div className="w-full flex mt-12">
                <Link to={"/bshackregister"}>
                  <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="item6"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg6.jpg')] bg-cover bg-center flex justify-start items-center text-white "
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0">Treasure Hunt</h1>
                <p className="text-2xl md:text-xl my-6">
                Treasure: The ultimate goal is to locate the treasure, which could be a physical object hidden at a specific location or a virtual prize.

                </p>
                <div className="w-full flex mt-12">
                  <Link to={"/treasureregister"}>
                  <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="item7"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg7.jpg')] bg-cover bg-center flex justify-start items-center text-white "
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0">Open Mic</h1>
                <p className="text-2xl md:text-xl my-6">
                Open Mic is one of the exciting segments of Playtopia, an event organized by the Department of Computer Application and Science; Business Administration. It provides a platform for individuals or duos to showcase their talents in various genres
                </p>
                <div className="w-full flex mt-12">
                <Link to={"/openmicregister"}>
                  <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[120px] w-full flex justify-center absolute bottom-5 lg:gap-8 md:gap-3 z-20">
            <a href="#item1" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/valoLogo.jpg"
                alt=""
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item2" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/bgmiLogo.jpg"
                alt=""
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item3" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/8bpLogo.jpg"
                alt=""
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item4" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/carromLogo.jpg"
                alt=""
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item5" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/ttLogo.jpg"
                alt=""
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item6" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/tresureLogo.jpg"
                alt=""
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item7" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/openMicLogo.jpg"
                alt=""
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
