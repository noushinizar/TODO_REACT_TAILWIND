import React from 'react'
import { useEffect, useState } from 'react';
import del from '/src/assets/icons8-delete-50.png';
 function Compleated() {
  const [cTask, setCTask] = useState([]);

  // Load completed tasks from localStorage when the component mounts
  useEffect(() => {
    const savedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setCTask(savedCompletedTasks);
    console.log("getitem")
  }, []);

  const deleteTask = (index) => {
    const updatedTasks = [...cTask];
    updatedTasks.splice(index, 1);
    setCTask(updatedTasks);
    localStorage.setItem('completedTasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="bg-white-100 h-screen w-[1000px] p-[20px] border-x">
      <h1 className="text-2xl text-black mb-4">Completed Tasks</h1>
      
      {cTask.length > 0 ? (
        <ul className="h-[50%] w-[100%] pt-[25px] text-black">
          {cTask.map((task, index) => (
            <li key={index} className="flex items-center justify-between">
              <div>
                <input type="checkbox" className="mr-2" checked readOnly />
                {task}
              </div>
              <button onClick={() => deleteTask(index)}>
                <img className="h-[25px] w-[25px]" src={del} alt="Delete" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="h-[50%] w-[100%] flex justify-center items-center flex-col">
          <span className="text-black">No completed tasks</span>
        </div>
      )}
    </div>
  );
}
export default Compleated

{/* <div className='bg-white-100 h-screen w-[1000px]  p-[20px] border-x'> */}