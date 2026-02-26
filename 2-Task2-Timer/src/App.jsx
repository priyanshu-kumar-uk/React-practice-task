import React from 'react'
import './index.css'


const App = () => {
  
  return (
    <div className='main'> 
        <div className="apps">
           <div className='top-text'>
            <h1>Task Manager</h1>
            <div className="top-right">
              <i class="ri-moon-fill"></i>
              <p>Renders: 9</p>
            </div>
           </div>
           <div className='count-box'>
                <div className = "timer">
                  <h1>0</h1>
                  <p>Total Tasks</p>
                </div>
                <div className = "timer">
                  <h1>0</h1>
                  <p>Active</p>
                </div>
                <div className = "timer">
                  <h1>0</h1>
                  <p>Completed</p>
                </div>
                <div className = "timer">
                  <h1>00:00</h1>
                  <p>Total Time</p>
                </div>
                <div className = "timer">
                  <h1>0s</h1>
                  <p>Avg/Task</p>
                </div>
                <div className = "timer">
                  <h1>0%</h1>
                  <p>Completion</p>
                </div>
           </div>
           <div className='fill-data-box'>
                <h1>Add New Task</h1>
                <form >
                  <input type="text" placeholder='Task Title' />
                 <textarea placeholder='Task Description'></textarea>
                 <select >
                  <option value="">Low Priority</option>
                  <option value="">Medium Priority</option>
                  <option value="">High Priority</option>
                 </select>
                  <button>Add Task</button>
                </form>
           </div>
           <div className='search-box'>
            
           </div>
           <div className='data-box'></div>
           
        </div>
           

    </div>
  )
}

export default App