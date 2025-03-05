import React from 'react';
import { useNavigate } from 'react-router-dom';

const SmallMenu = ({ category, index = 0, items }) => {
  const navigate = useNavigate();

  const images = [
    "smobile.webp",
    "selectronics.webp",
    "sfashion.webp",
    "stelevision.png",
    "sfurniture.webp",
    "sshoes.png",
    "sappliances.webp",
    "steddy.webp"
  ];

  function handleClick() {
    navigate("/product", { state: { category, items } });
  }

  return (
    <div className="flex flex-col justify-center items-center hover:cursor-pointer" onClick={handleClick}>
      <img 
        src={`/images/${images[index % images.length]}`} 
        alt={category} 
        className="w-16 h-16 object-cover"
      />
      <h5 className="text-center">{category}</h5>
    </div>
  );
};

export default SmallMenu;
