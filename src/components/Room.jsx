import React from 'react';
import { useParams } from 'react-router-dom';
import Editor from './Editor';

const Room = () => {
  const { roomId } = useParams();

  return (
    <div className="h-screen flex flex-col dark:bg-gray-700">
      <h1 className="text-center text-2xl dark:text-white">{roomId}</h1>
      <Editor roomId={roomId} />
    </div>
  );
};

export default Room;