
import React, { useState, useEffect } from 'react';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Today from "./components/today";
import Loader from './components/Loader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000); 
  }, []);

  return (
    <div className='min-h-screen w-screen bg-white flex justify-center items-center'>
      {loading ? (
        <Loader/> 
      ) : (
        <>
          <Sidebar />
          <Navbar />

          
          <Today />
          <div className='bg-white-100 h-screen w-[900px]'></div>
        </>
      )}
    </div>
  );
}

export default App;
