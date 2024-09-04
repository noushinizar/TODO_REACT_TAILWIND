import React from 'react'
import inbox from '/src/assets/icons8-inbox-48.png';
import menu from '/src/assets/icons8-menu-squared-48.png'
import sort from '/src/assets/sort.png'
import dot from '/src/assets/icons8-ellipsis-48.png'
import Fetchdata from './fetchdata';
 function Inbox() {
    
  return (
    <div className='bg-white-100 h-screen w-[1000px]  p-[20px] border-x'>
    <div className='h-[10%] w-[100%] flex  justify-between pt-[20px] pb-[30px]'>
            <div className='h-[100%] w-[80px] items-center flex gap-[15px] '>
                <img className='h-[30px] w-[30px] ' src={menu} alt="" />
                <h1 className='text-2xl text-black'>Inbox</h1>
            </div>
            <div  className='h-[100%] w-[60px]  flex items-center gap-[15px] '>
                <img className='h-[20px] w-[20px]' src={sort} alt="" />
                <img  className='h-[20px] w-[20px]' src={dot} alt="" />
            </div>
        </div>
        <h1 className='text-2xl text-black p-[10px]'>Task</h1>
       <Fetchdata/>
  </div>
  )
}
export default Inbox