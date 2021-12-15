function getAllTasks(req,res){
    res.send('working well')
}
function createTask(req,res){
    res.send('creates a task')
}
function getTask(req,res){
    const{id}=req.params
    res.send(`gets a task with id:${id} `)
}
function editTask(req,res){
    const{id}=req.params
    res.send(`edit a task with id:${id} `)
}
function deleteTask(req,res){
    const{id}=req.params
    res.send(`delete a task with id:${id} `)
}

module.exports={getAllTasks,deleteTask,createTask,getTask,editTask}