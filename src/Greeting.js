import  React , {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById("root"));


const Greeting = () =>{
    const [currentTime, setCurrentTime] = useState(new Date());
    const hour = currentTime.getHours();

    useEffect(()=>{
        let timer = setInterval(()=>{
            setCurrentTime(new Date())
        },5000);

        //clear the interval when the component is unmount
        return () => clearInterval(timer);
    },[])
    return (
        <div className="greeting-container">
            
            <div className="time"> {currentTime.toLocaleTimeString()} </div>
            
            {hour >= 5 && hour <=11 ? 
               <div className='msg'>Good Morning</div>
               : hour >= 12 && hour <=16 ?
               <div className='msg'>Good Afternoon </div>
               : hour >=17 && hour <=20 ? 
               <div className='msg'>Good Evening</div>
               : hour >= 21 || hour <=4 ? 
               <div className='msg'>Good Night</div> : null
            }
            
        </div>
    )
}

root.render(<Greeting/>)