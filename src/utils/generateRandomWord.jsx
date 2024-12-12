// src/utils/generateRandomWord.js
const wordList = [
  "able", "bake", "care", "dive", "echo", "fate", "glow", "hope", "iris", "jolt", 
  "kite", "lime", "muse", "note", "oval", "pine", "quiz", "rise", "sail", "time", 
  "urge", "vibe", "wave", "xray", "yarn", "zeal", "alpha", "brisk", "clay", "dock", 
  "echo", "flame", "gale", "haze", "inch", "jive", "kick", "loft", "muse", "nest", 
  "oak", "plume", "quilt", "rust", "star", "tide", "unit", "vial", "whip", "xeno", 
  "yoga", "zone", "acid", "bunk", "cafe", "dare", "edge", "fast", "glint", "holt", 
  "idea", "jack", "kite", "loud", "maze", "news", "open", "pave", "quit", "rays", 
  "slip", "term", "undo", "vibe", "warp", "xray", "yarn", "zoom", "arch", "bend", 
  "coil", "dawn", "ease", "flow", "grim", "hype", "iron", "june", "kill", "lake", 
  "mile", "note", "ogle", "peek", "quit", "reef", "sore", "tear", "urge", "view", 
  "whiz", "xeno", "yellow", "zeal", "aqua", "brag", "coin", "dart", "elm", "fair"
];


const generateRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
};

export default generateRandomWord;
