import menu from '/src/assets/icons8-menu-squared-48.png'
import sort from '/src/assets/sort.png'
import dot from '/src/assets/icons8-ellipsis-48.png'
import day from '/src/assets/icons8-calendar-1-48.png'
import moon from '/src/assets/moon.jpg'
import edit from '/src/assets/icons8-edit-48.png'
import del from '/src/assets/icons8-delete-50.png'
import save from '/src/assets/icons8-save-24.png'
import down from '/src/assets/icons8-chevron-24.png'
import  side from '/src/assets/icons8-expand-arrow-16.png'
import { useState } from 'react'
function Today(){
  const [input,setInput] =useState('')
  const [task,setTask] =useState('')
  const [cTask,setCTask]=useState([])
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [ismin,setIsmin] = useState(false)

  const AddTask = () => {
   if(input){
          setTask([...task, input]);
          setInput(''); 
        }
      }
      const editTask = (index) => {
        setEditIndex(index);
        setEditText(task[index]);
      };
    
      const saveTask = (index) => {
        const updatedTasks = [...task];
        updatedTasks[index] = editText;
        setTask(updatedTasks);
        setEditIndex(null);
        setEditText('');
      };
      const completeTask = (index) => {
        const newTasks = [...task];
        const completedTask = newTasks.splice(index, 1)[0];  
        setTask(newTasks);
        setCTask([...cTask, completedTask]);  
      };

  const deleteTask=(index)=>{
    const newTodos = [...task];
    newTodos.splice(index, 1);
    setTask(newTodos);
    cTask.splice(index,1);
    setCTask(cTask)
    
  }
  const toggleMinimize = () => {
    setIsmin(!ismin);
  };


    return(
        <div className='bg-white-100 h-screen w-[1000px]  p-[20px] border-x'>
        <div className='h-[10%] w-[100%] flex  justify-between pt-[20px] pb-[30px]'>
            <div className='h-[100%] w-[80px] items-center flex gap-[15px] '>
                <img className='h-[30px] w-[30px] ' src={menu} alt="" />
                <h1 className='text-2xl text-black'>Today</h1>
            </div>
            <div  className='h-[100%] w-[60px]  flex items-center gap-[15px] '>
                <img className='h-[20px] w-[20px]' src={sort} alt="" />
                <img  className='h-[20px] w-[20px]' src={dot} alt="" />
            </div>
        </div>
        <div className="relative">
  <input
    onChange={(input)=>{
      setInput(input.target.value)
    }} value={input}
    type="text"
    placeholder="＋ Add task to inbox"
    className="input input-none bg-zinc-100 w-[100%] text-black pr-10"
  />
  <input
    type="date"
    className="absolute top-0 right-8 h-full w-10 opacity-0 cursor-pointer"
    onClick={AddTask}
  />
  <span className="absolute top-0 right-8 h-full w-10 flex items-center justify-center text-blue-500 pointer-events-none">
    <img className='h-[25px] w-[25px]' src={day} alt="" /> today
  </span>
 
</div>

  {
    task.length>0 ? 
    (
      <ul className='h-[50%] w-[100%] pt-[25px] text-black '>
        <div className='flex'>
         <button className='pb-[10px]' onClick={toggleMinimize}>
          {
            ismin ?(<img src={down} alt="" />):(<img src={side} alt="" />)
          }
          </button>
        <h2 className='text-xl pb-[20px]'>Tasks</h2>
        </div>

        {task.map((task, index) => (
              <li key={index} className='flex items-center justify-between '>
                <div>
              <input type='checkbox' className='mr-2' onClick={()=>{
                completeTask(index)
              }}/>
                   {editIndex === index ? (
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className='input h-[25px] bg-zinc-100 text-black'
                  />
                )
                : (
                  task
                )}
              </div>
              <div className='flex gap-[20px]'>
              {editIndex === index ? (
                  <button onClick={() => saveTask(index)}  ><img src={save} alt="" /></button>
                ) : (
                  <button onClick={() => editTask(index)}>
                    <img className='h-[25px] w-[25px]' src={edit} alt="" />
                  </button>
                )}
              <button onClick={()=>{
                deleteTask(index)
              }}><img className='h-[25px] w-[25px]'  src={del} alt="" /></button>
              </div>
            </li>
          ))}
      </ul>
    ) : 
  (<div className='h-[50%] w-[100%] flex justify-center items-center flex-col'>
      <div className='flex flex-col justify-center items-center'>
        <img className='h-[100px] w-[100px]' src={moon} alt="" />
        <span className='text-black'>No tasks today</span>
        <span>Enjoy your evening</span>
      </div>
      </div>
    )
    }
  {cTask.length > 0 && (
        <div className='h-[30%] w-[100%] pt-[25px] text-black'>
           <div className='flex'>
         <button className='pb-[10px]' onClick={toggleMinimize}>
          {
            ismin ?(<img src={down} alt="" />):(<img src={side} alt="" />)
          }
          </button>
      <h2 className='text-xl pb-[20px]'>Completed Tasks</h2>
        </div>
          
          <ul>
            {cTask.map((task, index) => (
              <li key={index} className='flex items-center justify-between'>
                <div>
                  <input type='checkbox' className='mr-2' checked readOnly />
                  {task}
                </div>
                <button onClick={() => deleteTask(index)}>
                  <img className='h-[25px] w-[25px]' src={del} alt="Delete" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

        </div>
        
    )
}

export default Today

