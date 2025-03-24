import React, { useEffect, useState } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    setJoke(data.value);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
}

export default JokeFetcher;
