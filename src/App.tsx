import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import { ITask } from './interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [toDoList, setToDoList] = useState <ITask[]>([{taskName: 'i am a test task', deadline: 5}]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if(e?.target.name === 'task') {
      setTask(e.target.value);
    } else if(e?.target.name === 'deadline') {
      setDeadline(Number(e.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setToDoList([...toDoList, newTask]);
    console.log(toDoList);
    setDeadline(0);

  }

  const completeTask = (taskToDelete: string): void => {
    setToDoList(toDoList.filter(task => task.taskName !== taskToDelete)); 
  }

  return (
    <div className="App">
      <h1>Todo App With React and TypeScript</h1>
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder='Task' name="task" id="task" onChange={handleChange} />
          <input type="number" placeholder='0' name="deadline" id="deadline" onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div> 
      <div className="todoList">
        {toDoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>
    </div>
  );
}

export default App;
