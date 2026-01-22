const Task = require('../Models/Task');


const addTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({
            success: true,
            message: "Task added successfully",
            task
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({
            success: true,
            tasks
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getById = async (req, res) => {
    try {
        const id  = req.params.id;
        const task = await Task.findById(id);
        res.status(200).json({
            success: true,
            task: task
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body,{new:true});
        res.status(200).json({
            success: true,
            task: task
        })
    }
     catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const deleteTask = async(req,res) =>{
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            task
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {
    addTask,
    getAllTasks,
    getById,
    updateTask,
    deleteTask
}