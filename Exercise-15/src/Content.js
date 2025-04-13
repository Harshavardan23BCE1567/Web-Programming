import React, { useState } from 'react';

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
  "Why don't skeletons fight each other? They don't have the guts."
];

const Content = () => {
  const [joke, setJoke] = useState('Click the button for a joke!');
  
  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };
  
  return (
    <main>
      <p>{joke}</p>
      <button onClick={getRandomJoke}>Get Joke</button>
    </main>
  );
};

export default Content;