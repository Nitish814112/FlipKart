import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Slider from '../Slider.jsx/Slider';
import MiniCart from '../MiniCart/MiniCart';
import StickerLayout from '../StickerLayout/StickerLayout';
import DuoCard from '../DuoCard/DuoCard';
import Banner from '../Cards/Banner';
import Footer from '../Footer/Footer';
import Duo from '../DuoCard/Duo';

const MainLayout = ({items}) => {
let images=["/storage.webp", "/shoe.webp", "/kurta.webp"]; 
let images2=["/swash.webp","/swatch.webp","/sjewell.webp"]
let images3 =["/sbeds.webp","/stea.webp","/slakme.webp"];
let images4=["/sfly.webp","/sac.webp","/sphoness.webp"]
    
 

  return (
    <div className='w-full h-full'>
        {/* nabvar */}
        <div className="navbar w-full h-auto bg-white">
          <Navbar/>
        </div>
        {/* menu */}
        <div className="menu   mt-2 overflow-hidden bg-white">
          <Menu items={items} />
        </div>
        {/* slider */}
        <div className="slider w-full mt-3 ">
           <Slider /> 
        </div>
        {/* mini-Cart */}
        <div className="mini-Cart w-full mt-3 overflow-x-hidden bg-white ">
          <MiniCart items={items}/>
        </div>
        {/* sticker_1 */}
        <div className="sticker_1 w-full mt-3 bg-white">
        <StickerLayout images={images} />
        </div>
        {/* duo */}
        <div className="duo w-full  mt-3 bg-white ">
        <DuoCard items={items}/>
        </div>

        {/* sticker2 */}
        <div className="sticker2 w-full mt-3 border  bg-white">
         <Banner/>

        </div>

        {/* sticker_3 */}
        <div className="sticker_3 w-full  mt-3 border  bg-white">
          <StickerLayout images={images2}  />
          <StickerLayout images={images3} />
          <StickerLayout images={images4}/>
          
        </div>

        {/* brand Directory */}
        <div className="directory w-full mt-3 border  bg-white">
          <Duo items={items} />
        </div>
        {/* footer */}
        <div className="footer w-full  mt-3 border">
          <Footer/>
        </div>
        
    
    </div>
  )
}

export default MainLayout;