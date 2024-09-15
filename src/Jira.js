import React, { useState } from 'react'
import { tasks, statusTransition } from './utils';

export default function Jira() {
   
    const [allTasks, setAllTasks] = useState(tasks);

    const changeStatus = (taskID) => {
        const updatedTasks = allTasks.map(val => {
            if(val.id === taskID) {
                return {
                    ...val,
                    currentStatus: statusTransition[val.currentStatus]
                }
            }
            return val;
        });
        setAllTasks(updatedTasks);
    }

    return (
        <div id="board">
            <div className="status-board" id="todo">
                <h4>To Do</h4>
                {allTasks.map((task) => {
                    return (task.currentStatus === 'TODO' && (<div key={task.id} onClick={() => changeStatus(task.id)}>{task.name}</div>))
                })}
            </div>
            <div className="status-board" id="in-progress">
                <h4>In Progress</h4>
                {allTasks.map((task) => {
                    return (task.currentStatus === 'INPROGRESS' && (<div key={task.id} onClick={() => changeStatus(task.id)}>{task.name}</div>))
                })}
            </div>
            <div className="status-board" id="done">
                <h4>Done</h4>
                {allTasks.map((task) => {
                    return (task.currentStatus === 'DONE' && (<div key={task.id}  onClick={() => changeStatus(task.id)}>{task.name}</div>))
                })}
            </div>
        </div>
     );
}