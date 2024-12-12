// src/components/Room.js
import React from "react";
import { useParams } from "react-router-dom";
import Editor from "./Editor";

const Room = () => {
  const { roomId } = useParams();

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-center text-2xl">Room: {roomId}</h1>
      <Editor roomId={roomId} />
    </div>
  );
};

export default Room;
