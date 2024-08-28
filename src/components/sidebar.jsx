import check from '/src/assets/icons8-checked-checkbox-50.png'
import calender from '/src/assets/icons8-calendar-32.png'
import search from '/src/assets/icons8-search-50.png'
import sync from '/src/assets/icons8-synchronize-50.png'
import noti from '/src/assets/icons8-notification-48.png'
import help from '/src/assets/icons8-help-52.png'
function Sidebar(){
    return(
        <div className='bg-zinc-100 h-screen w-[100px] flex justify-between flex-col'>
        <ul  className='h-[35%] w-[100%]  flex justify-evenly items-center flex-col '>
            
                <li className='h-[35px] w-[35px] bg-red-800 rounded-lg flex justify-center items-center'>𝓝</li>
                <li><img  className='h-[30px] w-[30px]'src={check} alt="" /></li>
                <li><img className='h-[30px] w-[30px]' src={calender} alt="" /></li>
                <li><img className='h-[30px] w-[30px]' src={search} alt="" /></li>
           
        </ul>
        <ul className='h-[35%] w-[100%]  flex justify-evenly items-center flex-col  '>
           
                <li><img className='h-[30px] w-[30px]' src={sync} alt="" /></li>
                <li><img className='h-[30px] w-[30px]' src={noti} alt="" /></li>
                <li><img className='h-[30px] w-[30px]' src={help} alt="" /></li>
            </ul>
       
       
        </div>
    )
}

export default Sidebar