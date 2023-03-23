import React, { useRef, useState } from "react";
import "./css/style.css";
import  Gamepage  from "./Gamepage";

const PlayersForm = () => {
  
  const [playersname, setPlayersName] = useState({
    player1_name: "",
    player2_name: "",
  });
  console.log(playersname);

  const[isplayerformvisible, setIsPlayerFormVisible] = useState(true);

  const handleSubmit = (event) => {
    // alert('form data received');
    event.preventDefault();
    setIsPlayerFormVisible(false);

  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    // console.log(name, value);
    setPlayersName({...playersname, [name]: value});
  };

  return (
    <>
    {isplayerformvisible ? (
    <div>
      <div className="bg-image">
        <h1 className="text-center text-[30px] mt-8 text-[#F7F7F7]">
          Tic Tac Toe App
        </h1>
        <div className="flex-col items-center mt-[45px]">
          <div className="bg-white m-auto p-[3rem] rounded w-2/3 md:w-2/3 lg:w-1/2">
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row md:items-center justify-center mb-5">
                <label className="md:mr-4 inline-block text-gray-500" for="">
                  Player1 Name:
                </label>
                <input
                  className="border-b-2 border-x-gray-400  flex-1 py-2 placeholder-gray-500 outline-none focus:border-gray-600"
                  name="player1_name" placeholder="Enter circle/cross" type="text" id="player1_name" 
                 value={playersname?.player1} onChange={handleChange} required />
          
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-center mb-16">
                <label className="md:mr-4 inline-block text-gray-500" for="">
                  Player2 Name:
                </label>
                <input
                  className="border-b-2 border-x-gray-400 flex-1 py-2 placeholder-gray-500 outline-none focus:border-gray-600"
                  name="player2_name" placeholder="Enter circle/cross" type="text" id="player2_name"
                  value={playersname?.player2} onChange={handleChange} required />
              </div>
              <div className="text-center">
                <button className="py-3 px-2 md:px-4 bg-[#68B984] hover:bg-[#3C6255] ease-in-out duration-300 text-white font-normal rounded">
                  Start Game
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    ):(
      // <Gamepage player1name ={player1name} player2name ={player2name} />
      <Gamepage playersdata={playersname} />
    )}
    </>
  );
};

export default PlayersForm;
