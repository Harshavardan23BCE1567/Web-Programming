import React, { useState, useEffect } from 'react';

const JokeFetcher = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error) {
      setJoke('Failed to fetch joke. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading joke...</p>
      ) : (
        <div>
          <p>{joke}</p>
          <button onClick={fetchJoke}>Get New Joke</button>
        </div>
      )}
    </div>
  );
};

export default JokeFetcher;