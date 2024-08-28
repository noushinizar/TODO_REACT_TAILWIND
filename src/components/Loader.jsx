
import React from 'react';
import logo from '/src/assets/tickticklogo.jpeg'
const Loader = () => {
  return (

    <div className="flex justify-center flex-col items-center space-x-2">
         <img className='h-[100px] w-[100px]' src={logo} alt="" />
        <div className='flex justify-center items-center space-x-2 pt-[20px]'>
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
    </div>
  );
}

export default Loader;