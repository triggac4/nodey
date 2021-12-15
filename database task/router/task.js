const express = require("express")
const router=express.Router()

//controller
const {getAllTasks,createTask,deleteTask,editTask,getTask}=require("../controller/task_controller")

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').delete(deleteTask).patch(editTask).get(getTask)

module.exports=router