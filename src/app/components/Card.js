'use client';

import Image from 'next/image';

const Card = ({ game }) => {
  const handleIconClick = (e, url) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-red-300 w-full min-w-[16rem] sm:w-[18rem]">
      {/* Square Image */}
      <div className="relative w-full aspect-square">
        <Image
          src={game.image}
          alt={game.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name + App Store Icons */}
      <div className="flex flex-row justify-between items-center h-16 px-4 bg-red-300">
        <div className="font-bold text-md md:text-xl truncate w-2/3 text-white">
          {game.name}
        </div>

        <div className="flex space-x-3">
          {game.iosLink && (
            <Image
              src="/ios_icon.png"
              alt="ios"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={(e) => handleIconClick(e, game.iosLink)}
            />
          )}
          {game.androidLink && (
            <Image
              src="/android_icon.svg"
              alt="android"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={(e) => handleIconClick(e, game.androidLink)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
