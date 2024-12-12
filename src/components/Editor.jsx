

// src/components/Editor.js
import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Editor = ({ roomId }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, 'rooms', roomId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContent(docSnap.data().content || '');
      }
    };

    fetchContent();

    const interval = setInterval(fetchContent, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, [roomId]);

  const handleChange = async (e) => {
    setContent(e.target.value);
    await setDoc(doc(db, 'rooms', roomId), { content: e.target.value });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Insert tab character at caret position
      const newValue =
        content.substring(0, start) +
        '\t' +
        content.substring(end);
      setContent(newValue);

      // Move caret after the tab character
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      });
    }
  };

  return (
    <textarea
      value={content}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Start typing..."
      className="w-full h-full p-4 border rounded-md font-mono text-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none dark:bg-gray-800 dark:text-white"
      style={{ fontFamily: 'monospace', lineHeight: '1.5em' }}
    ></textarea>
  );
};

export default Editor;