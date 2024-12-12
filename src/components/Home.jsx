// src/components/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import generateRandomWord from '../utils/generateRandomWord';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

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
    <div className="flex flex-col items-center">
      <button onClick={createRoom} className="p-2 bg-blue-500 text-white rounded">Create Room</button>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Enter Room ID"
        className="mt-2 p-2 border rounded"
      />
      <button onClick={joinRoom} className="p-2 bg-green-500 text-white rounded">Join Room</button>
    </div>
  );
};

export default Home;