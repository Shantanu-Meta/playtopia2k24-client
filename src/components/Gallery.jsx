import Marquee from 'react-fast-marquee';

const Gallery = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-[url('/gallery.jpg')] bg-cover bg-bottom  bg-no-repeat">
      <Marquee className='mt-[150px]'>
        <div className="flex justify-between flex-wrap h-[300px] gap-3">
          <div className="h-[250px] mb-4 md:mb-0 ">
            <img src="/Gallery/1.jpg " alt="first image" className="h-full rounded-lg drop-shadow-xl" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/2.jpg" alt="second image" className="h-full rounded-lg drop-shadow-xl" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/3.jpg" alt="third image" className="h-full rounded-lg drop-shadow-xl" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/16.jpg" alt="fourth image" className="h-full rounded-lg drop-shadow-xl" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/5.jpg" alt="fifth image" className="h-full rounded-lg drop-shadow-xl" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/6.jpg" alt="sixth image" className="h-full rounded-lg drop-shadow-xl" />
          </div>

          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/7.jpg" alt="seventh image" className="h-full rounded-lg drop-shadow-xl" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/8.jpg" alt="eighth image" className="h-full rounded-lg drop-shadow-xl" />
          </div>
        </div>
      </Marquee>
      <Marquee direction="right" className='mt-2'>
        <div className="flex justify-between flex-wrap h-[300px] gap-3">
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/9.jpg" alt="first image" className="h-full rounded-lg " />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/15.jpg" alt="second image" className="h-full rounded-lg" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/11.jpg" alt="third image" className="h-full rounded-lg" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/12.jpg" alt="fourth image" className="h-full rounded-lg" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/13.jpg" alt="fifth image" className="h-full rounded-lg" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/14.jpg" alt="sixth image" className="h-full rounded-lg" />
          </div>
          {/* Add extra images to fill up space */}
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/15.jpg" alt="seventh image" className="h-full rounded-lg" />
          </div>
          <div className="h-[250px] mb-4 md:mb-0">
            <img src="/Gallery/16.jpg" alt="eighth image" className="h-full rounded-lg" />
          </div>
          {/* Add more images as needed */}
        </div>
      </Marquee>
    </div>
  );
};

export default Gallery;
