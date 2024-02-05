import React from 'react';
import './styles.css';
import Animal from './components/Animal';

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" description={<p>Very cute dog</p>} />
      <Animal emoji="🐈" name="Mittens" description={<p>A playful kitten</p>} />
      <Animal
        emoji="🐢"
        name="Archibald"
        description={<p>Very fast turtle</p>}
      />
      <Animal
        emoji="🐣"
        name="Chick Norris"
        description={<p>A nested chick</p>}
      />
    </main>
  );
}
