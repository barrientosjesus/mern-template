import { useState, useEffect } from 'react';
import ActorCard from '../../components/ActorCard/ActorCard';

export default function App() {
  const [actorData, setActorData] = useState({});

  async function getJSON(url) {
    try {
      const proxyUrl = 'https://cors-anywhere-fvtt-856084886d60.herokuapp.com/' + url;

      const response = await fetch(proxyUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async function fetchDataAndUpdate() {
    try {
      const response = await getJSON('https://localhost:30000/actorAPI/test-actors.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setActorData(data['dbWUbHD7vlnJg7yi']);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  useEffect(() => {
    fetchDataAndUpdate();

    const fetchInterval = 2000;
    const intervalId = setInterval(fetchDataAndUpdate, fetchInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center">
      {actorData.name && (<ActorCard actor={actorData} />)}

    </main>
  );
}
