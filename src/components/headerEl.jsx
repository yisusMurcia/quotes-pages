import * as React from 'react';

export default function HeaderEl({userName}) {

  return (
    <header>
      <h1>Binevienid@ {userName}</h1>
    </header>
  );
}