import React, { FC } from 'react';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <h1>Todo App With React and TypeScript</h1>
      <div className="header">
        <div className="todoList"></div>
      </div>
    </div>
  );
}

export default App;
