import React, { useState } from 'react'; 

const App = () =>{
    let time = new Date().toLocaleTimeString();

    const[ctime, setCtime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }; 

    setInterval(updateTime, 1000);

    return(
        <>
        <div className='container'>
               <h1 className='heading'>{ctime}</h1>
               </div>
        </>
 
    );
};

export default App;