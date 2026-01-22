import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getById, updateTaskById } from "./APIS/controller";

const UpdateTask = () => {

    const { id } = useParams();
    const [updateTask, setUpdateTask] = useState('');
    const navigate = useNavigate();
    useEffect(() =>{
        const fetchTask = async () => {
            const task = await getById(id);
            setUpdateTask(task.title);
            console.log("Fetched task:", task);
        };
        fetchTask();
    },[id])

    const handleSubmit = async () => {
        // Call updateTask API here with id and updateTask
        updateTaskById(id, updateTask);
        console.log("Updated Task:", updateTask);
        navigate("/");
    }
  return (
    <div>   
        <h1>Update Task</h1>
        <input 
          value={updateTask}
          onChange={(e) => setUpdateTask(e.target.value)}
        />  
        <button onClick={handleSubmit}>Update</button>
    </div>
  )
}
export default UpdateTask;