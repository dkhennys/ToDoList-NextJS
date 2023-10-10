'use client'
import {useState, useEffect} from "react"
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";




export default function Home() {
  const [task, setTask]= useState("");
  const [isLoading, setIsLoading]= useState(true);
  const handleCreateTask = async() =>{
    setIsLoading(true)
    try{
      const response = await fetch("/api/task/new", {
        method: 'POST',
        body: JSON.stringify({
          task: task
        }),
      })
      if (response.ok){
        setTask('')
      }
      else {
        console.log('error')
      }
    } 
    catch(e) {
      console.log(e)
    }
    setIsLoading(false)
  }


  return (
    <>
    <Header />
    <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask}/>
    </>
  )
}
