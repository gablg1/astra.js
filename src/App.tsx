import React from 'react';
import logo from './logo.svg';
import './App.css';

import { rpcClient } from "typed-rpc";

// Import the type (not the implementation!)
import type { MyService } from "../server/myService";

// Create a typed client:
const client = rpcClient<MyService>("http://localhost:3000/api");

// Call a remote method:
console.log(await client.hello("world"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
