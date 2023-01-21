import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';
import './task.css'

export default function ListeDo(){
  const [task,setTask]=useState('');
  const[tasks,settasks]=useState([
    {id:uuidv4(),nom:'sport' ,done:false},
    {id:uuidv4(),nom:'film',done:false},
    {id:uuidv4(),nom:'coding',done:false}
  ])
  const addTask=()=>{
    let ntasks=[...tasks];
    let ntask={};
    ntask.id=uuidv4();
    ntask.nom=task;
    ntasks.push(ntask);
    settasks(ntasks);
    setTask('');
  }
  const deleteTask=(idp)=>{
    let ntasks=tasks.filter((t)=>{
      return t.id!=idp
    })
    settasks(ntasks);
  }
  const donef=(id)=>{
    settasks(
      tasks.map((task) => task.id === id ? {id:task.id,nom:task.nom,done:true}:task))
  }
  return (
    <div className='container  ' >
    <div className=' col-md-12  d-flex justify-content-center align-items-center'>
        <div className='card w-75  '>
            <div className="card-body ">
                <h3 className='card-title'>Todo Liste Without Context API</h3>
                <div>
                    <input  type="text" className=' inputAdd w-50 '  placeholder='ajouter une tâche' value={task}  onChange={(e)=>{setTask(e.target.value)}} />
                    <button type='button' className='btn' onClick={addTask}>Add</button>
                </div>
                
            </div>
            <div className='liste '>
                    {
                        tasks.map((t)=>{
                        return <div key={t.id} >
                            <Task donef={()=>donef(t.id)} 
                            done={t.done}
                            delf={()=>deleteTask(t.id)}
                            txt={t.nom} /></div>
                        })
                    }
            </div>
        </div>
    </div>
</div>
  )
}
