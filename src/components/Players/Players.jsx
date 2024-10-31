/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Player from "./Player";

const Players = ({
  players,
  handleChoosePlayer,
  handleASBtn,
  activeBtn,
  selected,
  removePlayer,
}) => {
  return (
    <div className="mt-16 mb-32">
      {/* available and selected buttons */}
      <div className="mb-5 flex justify-between items-center max-sm:justify-around">
        <h2
          className={`${
            activeBtn === "available"
              ? "text-3xl font-bold max-sm:text-xl"
              : "hidden text-3xl font-bold"
          }`}
        >
          Available Players
        </h2>
        <h2
          className={`${
            activeBtn === "selected"
              ? "text-3xl font-bold max-sm:text-xl"
              : "hidden text-3xl font-bold"
          }`}
        >
          Selected Players({selected.length}/6)
        </h2>
        <div className="flex gap-0 rounded-xl w-[30%] h-fit join">
          <button
            id="available"
            onClick={() => handleASBtn("available")}
            className={`${
              activeBtn === "available"
                ? "btn bg-[#E7FE29] w-[50%] join-item max-sm:w-[70%]"
                : "btn w-[50%] join-item max-sm:w-[70%]"
            }`}
          >
            Available
          </button>
          <button
            id="selected"
            onClick={() => handleASBtn("selected")}
            className={`${
              activeBtn === "selected"
                ? "btn bg-[#E7FE29] w-[50%] join-item max-sm:w-[70%]"
                : "btn w-[50%] join-item max-sm:w-[70%]"
            }`}
          >
            Selected({selected.length})
          </button>
        </div>
      </div>
      {/* all players */}
      <div
        id="all-players"
        className="grid grid-cols-3 gap-5 max-md:grid-cols-1"
      >
        {players.map((player, idx) => (
          <Player
            key={idx}
            handleChoosePlayer={handleChoosePlayer}
            player={player}
          ></Player>
        ))}
      </div>

      <div id="selected-players" className="hidden">
        {/* selected players */}
        <div className="grid grid-cols-1 gap-4">
          {selected.map((player) => (
            <div className="flex justify-between items-center border p-5 rounded-2xl">
              <div className="flex gap-3 justify-center items-center">
                <div className="h-28 w-40">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={player.image}
                    alt=""
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-xl font-semibold">{player.name}</h1>
                  <p className="opacity-70">{player.role}</p>
                  <p>$ {player.biddingPrice}</p>
                </div>
              </div>
              <i
                onClick={() => removePlayer(player)}
                className="fa-regular fa-trash-can cursor-pointer text-xl text-red-600"
              ></i>
            </div>
          ))}
        </div>
        <div className="p-3 w-fit h-fit rounded-2xl border border-black mt-6">
          <button
            onClick={() => handleASBtn("available")}
            className="btn bg-[#E7FE29]"
          >
            Add More Players
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
