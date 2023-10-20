import { useState, useEffect } from 'react';
import ActorCard from '../../components/ActorCard/ActorCard';

export default function App() {
  const [actorData, setActorData] = useState({});
  const [actors, setActors] = useState({});

  async function fetchDataAndUpdate() {
    await fetch('https://actor-widget-cae0d5c7d2fc.herokuapp.com/actors/http://192.168.1.160:30000/actorAPI/test-actors.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setActorData(data['dbWUbHD7vlnJg7yi']);
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
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
