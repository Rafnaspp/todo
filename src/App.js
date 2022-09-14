import React, { useState } from 'react';

import AddTaskForm from './components/AddTaskForm.jsx'
import UpdateForm from './components/UpdateForm.jsx'
import ToDo from './components/ToDo.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  //Task (ToDo list State)
  const [toDo, setToDo] = useState([
  ])

  //Temp state
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  //Add Task
  const addTask = () => {
    if(newTask){
      let num= toDo.length +1;
      let newEntry = {id:num, title:newTask, status:false}
      setToDo([...toDo,newEntry])
      setNewTask('')
    }
  }

  //Delete Task
  const deleteTask = (id) => {
    let newTask= toDo.filter(task => task.id !==id)
    setToDo(newTask)
  }

  //Mark Task done or completed
  const markDone = (id) => {
    let newTask= toDo.map(task => {
      if(task.id === id){
        return ({...task, status: !task.status})
      }
      return task
    })
    setToDo(newTask)
  }

  //Cancel Update
  const cancelUpdate = () => {
    setUpdateData('')
  }

  //Change Task for Update
  const changeTask = (e) => {
     let newEntry = {
      id:updateData.id,
      title:e.target.value,
      status:updateData.status ?true :false
     }
     setUpdateData(newEntry)
  }

  //update Task
  const updateTask = () => {
    let filterRecords= [...toDo].filter( task => task.id !== updateData.id)
    let updatedObject =[...filterRecords, updateData]
    setToDo(updatedObject)
    setUpdateData('')
  }

  return (
    <div className="container App">

      <h1>ToDo list </h1>
      <br></br>
      {/* Udpate Task */}
      {updateData && updateData ? (
    <UpdateForm
    updateData={updateData}
    changeTask={changeTask}
    updateTask={updateTask}
    cancelUpdate={cancelUpdate}
    />
      ) : (
        <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        />
      )}
      

      <br />

     
      <br />

      {toDo && toDo.length ? '' : 'No Tasks...'}

      <ToDo
       toDo={toDo}
       markDone={markDone}
        setUpdateData={ setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
