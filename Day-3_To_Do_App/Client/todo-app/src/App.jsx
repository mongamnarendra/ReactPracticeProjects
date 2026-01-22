import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // ✅ imports
import './App.css';
import { addTask, changeStatus, deleteTask, getAllTasks } from './APIS/controller';
import UpdateTask from './UpdateTask'; // ✅ make sure file exists

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const tasks = await getAllTasks();
    setTaskList(tasks);
  };

  useEffect(() => {
    fetchTasks(); // initial load
  }, []);

  const handleSubmit = async () => {
    await addTask(task);
    const tasks = await getAllTasks();
    setTaskList(tasks);
    setTask('');
  };

  const updateTaskById = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    const tasks = await getAllTasks();
    setTaskList(tasks);
  };

  const statusChange = async (id) => {
    changeStatus(id)
    await fetchTasks();
  }

  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div>
            <h1>Todo</h1>
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleSubmit}>Add task</button>

            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {taskList.map((task) => (
                  <tr
                    key={task._id}
                    className={task.status ? "completed-task" : ""}
                  >
                    <td>{task.title}</td>
                    <td>
                      <button onClick={() => handleDeleteTask(task._id)}>
                        Delete
                      </button>
                      <button onClick={() => updateTaskById(task._id)}>
                        Update
                      </button>
                      <button onClick={() => statusChange(task._id)}>
                        Completed
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        }
      />

      {/* Update Page */}
      <Route path="/update/:id" element={<UpdateTask />} />
    </Routes>
  );
}

export default App;
