// src/utils/generateRandomWord.js
const wordList = [
  "able",
  "bake",
  "care",
  "dive",
  "echo",
  "fate",
  "glow",
  "hope",
  "iris",
  "jolt",
  "kite",
  "lime",
  "muse",
  "note",
  "oval",
  "pine",
  "quiz",
  "rise",
  "sail",
  "time",
  "urge",
  "vibe",
  "wave",
  "xray",
  "yarn",
  "zeal",
];

const generateRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
};

export default generateRandomWord;
