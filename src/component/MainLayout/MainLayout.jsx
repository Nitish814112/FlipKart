import React from 'react'
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Slider from '../Slider.jsx/Slider';
import MiniCart from '../MiniCart/MiniCart';
import StickerLayout from '../StickerLayout/StickerLayout';
import DuoCard from '../DuoCard/DuoCard';
import Banner from '../Cards/Banner';
import Footer from '../Footer/Footer';

const MainLayout = () => {
  return (
    <div className='w-full h-full'>
        {/* nabvar */}
        <div className="navbar w-full h-auto bg-white">
          <Navbar/>
        </div>
        {/* menu */}
        <div className="menu   mt-2 overflow-hidden bg-white">
          <Menu />
        </div>
        {/* slider */}
        <div className="slider w-full mt-3 ">
           <Slider /> 
        </div>
        {/* mini-Cart */}
        <div className="mini-Cart w-full mt-3 overflow-x-hidden bg-white ">
          <MiniCart />
        </div>
        {/* sticker_1 */}
        <div className="sticker_1 w-full mt-3 bg-white">
        <StickerLayout/>
        </div>
        {/* duo */}
        <div className="duo w-full  mt-3 bg-white ">
        <DuoCard/>
        </div>

        {/* sticker2 */}
        <div className="sticker2 w-full mt-3 border  bg-white">
         <Banner/>

        </div>

        {/* sticker_3 */}
        <div className="sticker_3 w-full  mt-3 border  bg-white">
          <StickerLayout />
          <StickerLayout />
          <StickerLayout />
          
        </div>

        {/* brand Directory */}
        <div className="directory w-full mt-3 border  bg-white">
          <DuoCard />
          <StickerLayout />
          <StickerLayout />
        </div>
        {/* footer */}
        <div className="footer w-full  mt-3 border">
          <Footer/>
        </div>
        
    
    </div>
  )
}

export default MainLayout;