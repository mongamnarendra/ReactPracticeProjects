import axios from "axios";

export const addTask = async(task)=>{
   await axios.post("http://localhost:3000/api/v1/add-task", {title:task})
   .then ((res)=>{
     console.log("Task added", res.data);   
   })
    .catch((err)=>{
        console.log("Error adding task", err);
    })
}

export const getAllTasks = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/v1/tasks");
    return res.data.tasks;
  } catch (err) {
    console.log("Error fetching tasks", err);
    return []; 
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`http://localhost:3000/api/v1/delete-task/${taskId}`); 
    console.log("Task deleted");
  } catch (err) {
    console.log("Error deleting task", err);
  } 
};

export const updateTaskById = async (taskId, updatedTitle) => {
  try {
    await axios.put(`http://localhost:3000/api/v1/update/${taskId}`, { title: updatedTitle });
    console.log("Task updated");
  }
  catch (err) {
    console.log("Error updating task", err);
  } 
};

export const getById = async (taskId) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/v1/task/${taskId}`);
    return res.data.task;
  } catch (err) {
    console.log("Error fetching task by ID", err);
    return null; 
  }
};


export const changeStatus = async (taskId) => {
  try {
   const res= await axios.put(`http://localhost:3000/api/v1/update/${taskId}`, { status: true });
    console.log("Task status updated to completed",res);
  }
  catch (err) {
    console.log("Error updating task status", err);
  }
};
