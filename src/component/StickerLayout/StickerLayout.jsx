import React from "react";

const StickerLayout = ({ images }) => {
  if (!images || images.length === 0) return "Loading...";

  return (
    <div className="mx-4 h-full border-2">
      <div className="flex border object-cover gap-2"> 
        {/* Adding gap to maintain spacing */}

        {images.map((img, i) => (
          <div className="border" key={i}>
            <img src={`/images${img}`} alt={`sticker-${i}`} className="object-fit w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickerLayout;
