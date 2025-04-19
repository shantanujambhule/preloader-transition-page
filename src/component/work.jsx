import React from 'react';

const Work = () => {
  return (
    <div className="bg-[#c8c2cf] h-screen w-full overflow-hidden relative flex flex-col p-10 items-center z-0">
      {/* Main Content */}
      <div className="pt-[12vh] text-center leading-20">
        <h1 className="learn-2 mr-7">
          <span className="text-gray-700 uppercase text-xs font-mono">Featured</span> Work
        </h1>
        <div className="">
          <h1 className="learn-2">Thermo.Konect</h1>
          
        </div>
        <p className='learn-3'></p>
        <div className="">
          <h1 className="learn-2">Xe.Works</h1>
          
        </div>
        <p className='learn-3'></p>
        <div className="">
          <h1 className="learn-2">Thrust</h1>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full">
        <div className="h-30 w-full bg-black z-10"></div>
      </footer>
    </div>
  );
};

export default Work;
