import menu from '/src/assets/icons8-menu-squared-48.png'
import sort from '/src/assets/sort.png'
import dot from '/src/assets/icons8-ellipsis-48.png'
import day from '/src/assets/icons8-calendar-1-48.png'
import moon from '/src/assets/moon.jpg'
function Week(){
    return(
      <div className='bg-white-100 h-screen w-[1000px]  p-[20px] border-x'>
        <div className='h-[10%] w-[100%] flex  justify-between pt-[20px] pb-[30px]'>
            <div className='h-[100%] w-[80px] items-center flex gap-[15px] '>
                <img className='h-[30px] w-[30px] ' src={menu} alt="" />
                <h1 className='text-2xl text-black'>Next7Days</h1>
            </div>
            <div  className='h-[100%] w-[60px]  flex items-center gap-[15px] '>
                <img className='h-[20px] w-[20px]' src={sort} alt="" />
                <img  className='h-[20px] w-[20px]' src={dot} alt="" />
            </div>
        </div>
        <div className="relative">
  <input
    // onChange={(input)=>{
    //   setInput(input.target.value)
    // }} value={input}
    type="text"
    placeholder="＋ Add task to inbox"
    className="input input-none bg-zinc-100 w-[100%] text-black pr-10"
  />
  <input
    type="date"
    className="absolute top-0 right-8 h-full w-10 opacity-0 cursor-pointer"
    // onClick={AddTask}
  />
  <span className="absolute top-0 right-8 h-full w-10 flex items-center justify-center text-blue-500 pointer-events-none">
    <img className='h-[25px] w-[25px]' src={day} alt="" /> week
  </span>
 
</div>
<div className='h-[50%] w-[100%] flex justify-center items-center flex-col'>
      <div className='flex flex-col justify-center items-center'>
        <img className='h-[100px] w-[100px]' src={moon} alt="" />
        <span className='text-black'>No tasks for this week</span>
        <span>Enjoy your week</span>
      </div>
      </div>
      </div>
        
    )
}

export default Week