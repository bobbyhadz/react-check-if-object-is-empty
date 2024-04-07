import './App.css';

import {useEffect, useState} from 'react';

export default function App() {
  const [person, setPerson] = useState({});

  useEffect(() => {
    if (Object.keys(person).length === 0) {
      console.log('Object is empty');
    }

    if (Object.keys(person).length > 0) {
      console.log('Object is NOT empty');
    }
  }, [person]);

  return (
    <div>
      <h2>Object: {JSON.stringify(person)}</h2>

      <button onClick={() => setPerson({id: 1, name: 'Alice'})}>
        Set state
      </button>
    </div>
  );
}
