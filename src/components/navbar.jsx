import today from '/src/assets/icons8-calendar-1-52.png'
import week from '/src/assets/icons8-tuesday-52.png'
import inbox from '/src/assets/icons8-inbox-48.png'
import check from '/src/assets/icons8-tick-box-52.png'
import trash from '/src/assets/icons8-trash-48.png'
function Navbar(){
    return(
      <div className='bg-white-100 h-screen w-[300px] text-black border-x'>
        <ul  className='h-[40%] w-[100%]  flex justify-evenly items-center flex-col p-[10px]  '>
            <li className='h-[60px] w-[100%]  flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'><img className='h-[20px] w-[20px] ' src={today} alt="" />Today</li>
            <li className='h-[60px] w-[100%]  flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'><img className='h-[20px] w-[20px] ' src={week} alt="" />Next 7 Days</li>
            <li className='h-[60px] w-[100%]  flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl '><img className='h-[25px] w-[25px] ' src={inbox} alt="" />Inbox</li>
            <li className='h-[60px] w-[100%]  flex gap-[10px] hover:bg-zinc-200 p-[15px] rounded-2xl'><img className='h-[20px] w-[20px] ' src={check} alt="" />Compleated</li>
            <li className='h-[60px] w-[100%] flex gap-[10px]  hover:bg-zinc-200 p-[15px] rounded-2xl'><img className='h-[25px] w-[25px] ' src={trash} alt="" />Trash</li>
        </ul>

      </div>
    )
}
export default Navbar