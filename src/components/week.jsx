import menu from '/src/assets/icons8-menu-squared-48.png'
import sort from '/src/assets/sort.png'
import dot from '/src/assets/icons8-ellipsis-48.png'
import day from '/src/assets/icons8-calendar-1-48.png'
function Week(){
    return(
        <div className='bg-zinc-100 h-screen w-[1000px]  p-[20px] border-x '>
        <div className='h-[70%] w-[100%] flex  justify-between pt-[20px] pb-[30px]'>
            <div className='h-[100%] w-[80px] items-center flex gap-[15px] '>
                <img className='h-[30px] w-[30px] ' src={menu} alt="" />
                <h1 className='text-2xl text-black'>Next 7 Days</h1>
            </div>
            <div  className='h-[100%] w-[60px]  flex items-center gap-[15px] '>
                <img className='h-[20px] w-[20px]' src={sort} alt="" />
                <img  className='h-[20px] w-[20px]' src={dot} alt="" />
            </div>
        </div>
        <div className="relative">
  <input
    type="text"
    placeholder="＋ Add task to inbox"
    className="input input-none bg-zinc-200 w-[100%] text-black pr-10"
  />
  <input
    type="date"
    className="absolute top-0 right-8 h-full w-10 opacity-0 cursor-pointer"
  />
  <span className="absolute top-0 right-8 h-full w-10 flex items-center justify-center text-blue-500 pointer-events-none">
    <img className='h-[25px] w-[25px]' src={day} alt="" /> Today
  </span>
</div>
<div className='h-[70%] w-[100%] flex justify-center items-center flex-col'>
        <img className='h-[100px] w-[100px]'src={moon} alt="" />
        <span className='text-black'>  No tasks today</span>
        <span>enjoy your evening</span>
      </div>
        </div>
        
    )
}

export default Week