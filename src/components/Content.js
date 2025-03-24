import React, { useState } from 'react';

function Content() {
  const [joke, setJoke] = useState('');

  const fetchJoke = () => {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why don't programmers like nature? It has too many bugs."
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);
  };

  return (
    <div>
      <button onClick={fetchJoke}>Get a Random Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default Content;
