// src/components/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import generateRandomWord from '../utils/generateRandomWord';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);


  const createRoom = () => {
    const newRoomId = generateRandomWord();
    navigate(`/room/${newRoomId}`);
  };

  const joinRoom = () => {
    if (roomId.trim()) {
      navigate(`/room/${roomId}`);
    }
  };

  return (
    <div className={` flex flex-col items-center ${darkMode ? 'dark' : ''}`}>
      {/* <button onClick={toggleDarkMode} className="p-2 bg-gray-500 text-white rounded mb-4">
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button> */}
      <button onClick={createRoom} className="p-2 mt-2 bg-blue-800 text-white w-56 rounded">Create Room</button>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Enter Room ID"
        className="mt-2 p-2 border rounded dark:bg-gray-800 w-56 dark:text-white"
      />
      <button onClick={joinRoom} className="p-2 bg-green-800 w-56 text-white rounded mt-2">Join Room</button>
    </div>
  );
};

export default Home;

