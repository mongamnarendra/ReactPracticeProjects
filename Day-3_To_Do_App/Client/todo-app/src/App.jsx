import { useEffect, useState } from 'react';
import './App.css';
import { addTask, getAllTasks } from './APIS/controller';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getAllTasks();
      setTaskList(tasks);
    };
    fetchTasks();
  }, []);


  const handleSubmit = async () => {
    await addTask(task);
    const tasks = await getAllTasks();
    setTaskList(tasks);
    setTask('');
  };

  return (
    <div>
      <h1>Todo</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleSubmit}>Add task</button>

      {Array.isArray(taskList) && taskList.map((task) => {
        return <div key={task._id}>{task.title}</div>; 
      })}
    </div>
  );
}

export default App;
