/* eslint-disable react/prop-types */
import { FaFlag } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const Player = ({ player, handleChoosePlayer }) => {
  const {
    playerId,
    name,
    country,
    image,
    role,
    battingType,
    bowlingType,
    biddingPrice,
    rating,
  } = player;

  return (
    <div className="p-5 h-fit space-y-4 border rounded-2xl">
      <div className="h-[300px] w-full">
        <img className="rounded-xl h-full w-full object-cover" src={image} alt="" />
      </div>
      <div className="flex items-center gap-3">
        <IoPerson className="text-2xl"></IoPerson>
        <h1 className="text-2xl font-semibold">{name}</h1>
      </div>
      <div className="flex justify-between items-center">
        <span className="opacity-50">
          <FaFlag className="inline-block mr-3"></FaFlag>
          {country}
        </span>
        <button className="btn btn-sm">{role}</button>
      </div>
      <hr />
      <p>Rating : {rating}/5 </p>
      <div className="font-semibold space-y-3">
        <div className="flex justify-between items-center">
          <p>{battingType}</p>
          <p className="opacity-70">{bowlingType}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Price: ${biddingPrice}</p>
          <div className="border rounded-lg">
            <button
              onClick={() => handleChoosePlayer(playerId)}
              className="btn"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
