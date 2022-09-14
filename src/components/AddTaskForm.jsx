const AddTaskForm = ({ newTask,setNewTask,addTask }) =>{
    return(
<>
         {/* AddTask */}
      <div className='row'>
        <div className='col'>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className='form-control form-control-lg'
          />
        </div>
        <div className='col-auto'>
          <button onClick={addTask} className='btn btn-lg btn-success'>Add Task</button>
        </div>
      </div>
        </>
    )
}

export default AddTaskForm