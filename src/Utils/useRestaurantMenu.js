import { MENU_URL } from "./config";
import {useState , useEffect} from 'react';

const useRestaurantMenu = (resId) =>{
    const [resMenu, setResMenu] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetchAPI();
    },[])

    const fetchAPI = async () => {
        try{
             const response = await fetch(MENU_URL + resId);
        if(!response.ok) {
           
            throw new Error()
        }
        // if it is success 
        const data = await response.json();
        setResMenu(data)
        }
        catch(err) {
            //error send object - we print oly error.message
            console.log(err.message);
             setError(err.message)
        }
        finally {
            setLoading(false) // stop loading
        }
      
    }

// put the state is variable so put into object boxx return as shorhand object
    return {resMenu, error , loading};
}

export default useRestaurantMenu;