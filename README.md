# @piso/use-debounce-state
Simple function to debounce `useState` value.

# Installation

_Hooks are not ready a for production. Checkout the official [React Hooks](https://reactjs.org/docs/hooks-intro.html) features._
You must use at minimum `react@16.7.0-alpha.0` to use this package.

`npm install @piso/use-debounce-state`

# Example

## Simple example
```javascript
import React from "react";
import ReactDOM from "react-dom";
import { useDebounceState } from "@piso/use-debounce-state";

function App() {
  const [value, setValue, debounceValue] = useDebounceState('', 500);

  return (
    <div className="App">
      <h1>Debounce state example : {debounceValue}</h1> 
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## With useEffect

```javascript
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDebounceState } from '@piso/use-debounce-state';

function App() {
  const [value, setValue, debounceValue] = useDebounceState('', 500);
  const [users, setUsers] = useState([]);

  // Just for example
  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          const filtered = users.filter(user =>
            user.name.startsWith(debounceValue)
          );
          setUsers(filtered);
        })
        .catch(e => console.log(e));
    },
    [debounceValue]
  );

  return (
    <div className="App">
      <h1>Search user : {debounceValue}</h1>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <ul>
        {users.map(({ name, id }) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```