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
