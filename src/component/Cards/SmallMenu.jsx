import React from 'react';

const SmallMenu = ({ category, index = 0 }) => {
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

  return (
    <div className="flex flex-col justify-center items-center">
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
