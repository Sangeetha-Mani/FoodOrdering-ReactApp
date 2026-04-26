import { MENU_URL } from "../Utils/constants";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
const [resMenu, setRestMenu] = useState(null);
const {resId} = useParams();
console.log(resId);


useEffect(()=>{
    fetchAPI();
},[])

const fetchAPI = async () => {
    try{
        const data = await fetch(MENU_URL + resId);
        if (!response.ok) {
      throw new Error("API failed");
    }
    const res = await data.json();
    console.log(res)

    }catch(err) {
        console.log(err,"error")
    }
    
}
    return(
        <div>
            <h1>name of the resturant</h1>
            <h3>price</h3>
            <hr/>
            <h2>Menu</h2>
            
        </div>
    )
}

export default ResturantMenu;