
import React, { useState, useEffect } from 'react';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Today from "./components/today";
import Loader from './components/Loader';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Week from './components/week';
import Inbox from './components/inbox';
import Compleated from './components/compleated';
import Trash from './components/trash';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000); 
  }, []);

  return (
    
    <Router>
    <div className='min-h-screen w-screen bg-white flex justify-center items-center'>
      {loading ? (
        <Loader/> 
      ) : (
        <>
          <Sidebar />
          <Navbar />
            <Routes>
              <Route path='/' element={<Today/>}/> 
              <Route path='/next7days' element={<Week/>}/>
              <Route path='/inbox' element={<Inbox/>}/>
              <Route path='/compleated' element={<Compleated/>}/>
              <Route path='/trash' element={<Trash/>}/>
            </Routes>
            <div className='bg-white-100 h-screen w-[900px]'></div>
        </>
      )}
    </div>
  </Router>
  );
}

export default App;
