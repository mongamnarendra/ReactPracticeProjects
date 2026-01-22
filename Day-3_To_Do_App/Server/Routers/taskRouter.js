const router = require('express').Router();
const { addTask, getAllTasks, updateTask, getById, deleteTask } = require('../Controllers/taskController');


router.post('/add-task', addTask);
router.get('/tasks', getAllTasks);
router.put('/update/:id',updateTask);
router.get('/task/:id',getById);
router.delete('/delete-task/:id',deleteTask)

module.exports = router;