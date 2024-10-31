import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";
import { useEffect } from "react";
import { ToastContainer, toast, Flip, Bounce, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  // * all useStates
  const [selected, setSelected] = useState([]);
  const [activeBtn, setActiveBtn] = useState("available");
  const [players, setPlayers] = useState([]);
  // * fetching players
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);

  // * coin setting
  const [coin, setCoin] = useState(0);
  function handleCoins() {
    toast.success("Coins added to your account.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
    setCoin(coin+10000);
  }
  // * choose player button function
  function handleChoosePlayer(id) {
    const choosenPlayer = players.find((player) => id === player.playerId);

    // add to selected players
    if (selected.includes(choosenPlayer)) {
      toast.warn(`${choosenPlayer.name} already selected`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      return;
    }
    else if (selected.length > 5) {
      toast.error("You can't select more than 6 players", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else {
      // change coins number in nav
      const playerPrice = parseFloat(choosenPlayer.biddingPrice);
      if (playerPrice < coin) {
        const newCoin = coin - playerPrice;
        document.getElementById("coin").innerText = newCoin;
        setCoin(newCoin);
      } else {
        toast.error("Insufficient coins", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip,
        });
        return;
      }
      const newSelected = [...selected, choosenPlayer];
      setSelected(newSelected);
      toast.success(`${choosenPlayer.name} selected successfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  }

  // * handle remove player from selected players
  function removePlayer(delPlayer) {
    const delPrice = parseFloat(delPlayer.biddingPrice);
    const newCoin = coin + delPrice;
    const newSelected = selected.filter((player) => player !== delPlayer);
    setSelected(newSelected);
    setCoin(newCoin);
    toast.error(`${delPlayer.name} removed successfully`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  }

  // * available and selected section
  const handleASBtn = (btn = "available") => {
    if (btn === "selected") {
      setActiveBtn("selected");
      document.getElementById("all-players").classList.add("hidden");
      document.getElementById("selected-players").classList.remove("hidden");
    } else {
      document.getElementById("selected-players").classList.add("hidden");
      document.getElementById("all-players").classList.remove("hidden");
      setActiveBtn("available");
    }
  };
  return (
    <>
      <div className="max-w-[85%] mx-auto max-sm:max-w-[90%]">
        <Navbar coin={coin}></Navbar>
        <Banner handleCoins={handleCoins}></Banner>
        <Players
          handleChoosePlayer={handleChoosePlayer}
          activeBtn={activeBtn}
          handleASBtn={handleASBtn}
          players={players}
          selected={selected}
          removePlayer={removePlayer}
        ></Players>
        <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
