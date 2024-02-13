import {Typography, TextField, List, ListItem, ListItemText, ListItemIcon, Checkbox} from '@mui/material'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    document.addEventListener("keydown", function(Event){
      if(Event.key === "Enter"){
        const todotext = document.getElementById("newtodo").value
        if(todotext){
          setTodos([...todos, {title: todotext, completed: false}])
          //document.getElementById("newtodo").value =  ""
        }
      }
    })

}, [todos])

console.log(todos)

  return (
    <>
      <Typography variant="h2" component="h1">To Do</Typography>
      <TextField id="newtodo" variant="outlined" label="Ny todo-oppgave" ></TextField>
      <List>
        {todos.map((todo, index)=>{
          <ListItem key={index}>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <ListItemText primary={todo.title}/>
        </ListItem>
        })}

        <ListItem>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <ListItemText primary="vaske bil"/>
        </ListItem>
        <ListItem>
        <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <ListItemText primary="yay"/>
        </ListItem>
      </List>
    </>
  )
}

export default App
