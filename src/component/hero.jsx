import React from 'react';

const Hero = () => {
  return (
    <div className='bg-[#c8c2cf] h-screen w-full overflow-hidden relative top-0 z-0'>
      <nav className='flex items-center pt-1 relative'>
        {/* {left} */}
        <div className="flex items-center gap-4">
          <div className="relative ml-2">
            <img className='h-22 w-[100%] absolute  z-0' src="./r32.svg" alt="" srcset="" />
            <div className="relative z-10 ml-5 flex items-center justify-between gap-22 top-5 text-white">
              <h1 className='text-5xl '>Digital</h1>
              <p className='text-xs font-mono uppercase mt-7'> web design agency</p>
              <span className='text-4xl mr-4'>▲  ■  ✖ ◯</span>
            </div>
          </div>
        </div>

        {/* {right} */}
        <div className='relative ml-5 w-fit'>
          <img className='h-10 w-210 relative z-0' src="./r16.svg" alt="" srcset="" />
          <ul className='group cursor-pointer absolute inset-0 flex items-center justify-center gap-35 text-xl z-10'>
            <li className="nav-item">Work <span className='learn'>&nbsp;(25)</span></li>
            <li className="nav-item">About</li>
            <li className="nav-item">Let's Talk<span className='learn'>&nbsp;(+)</span></li>
            <li className="nav-item">Exp<span className='learn'>&nbsp;(↗)</span></li>
          </ul>
        </div>
      </nav>

      <div className="main ">

        <img className='h-100 rotate-90 absolute pb-10 top-50 left-10' src="./arrow.png" alt="" srcset="" />

        <div className="hero-vid absolute right-3 h-120 w-208 rounded-2xl overflow-hidden shadow-lg">
          <video autoPlay muted loop className="w-full h-full object-cover rounded-2xl">
            <source src="./hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <footer className='flex flex-col pt-5 ml-5 w-[100vw]  bottom-0 absolute '>
        <div className="foot flex justify-between pb-5 w-[97%]">
          <h1 className='pr-80'>House of digital aesthetics ©</h1>
          <p >Place where well-crafted web projects are born.</p>
          <p>We provide end-to-end web development and design services.</p>
        </div>
        <div className="line h-[1px] w-[97%] bg-black"></div>
        <p className='text-xs '>@2025</p>

      </footer>

    </div>
  )
}

export default Hero
