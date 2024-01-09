// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

import { useState } from 'react';

function Home() {
  const [value, setValue] = useState(0);
  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>
      <button
        type="button"
        key="inc"
        onClick={() => {
          setValue(value + 1);
        }}
        className="button"
      >
        Increment
      </button>
      <button
        type="button"
        key="dec"
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        key="reset"
        onClick={() => {
          setValue(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Home;
