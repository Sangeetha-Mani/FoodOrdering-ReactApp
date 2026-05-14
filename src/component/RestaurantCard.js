import { CDN_URL } from "../Utils/config";

const ResturantCard = ({resData}) => {


   const {name, cuisines ,avgRating, costForTwo , cloudinaryImageId} = resData.info;
    return (
        <>
            <div className='p-2 m-2 w-64  bg-white-400 hover:bg-yellow-100-500'>
                <img className='h-48 w-full object-cover' alt='res-logo'  src={ CDN_URL + cloudinaryImageId}/>
                {/* src={ CDN_URL + cloudinaryImageId}/> */}
                <div className="h-32 w-full object-cover">
                    <h4 className="font-bold ">{name}</h4>
                    <div className="font-semibold text-lime-500">
                        <span>{costForTwo} </span>
                        <span>{  " - " + avgRating} Ratings</span>
                    </div>
                
                
              
                <h4 className="overflow-hidden text-gray-400 text-ellipsis">{cuisines.join(',')}</h4>
                
                </div>
            </div>
        </>
       
    )
}
// HOC 
//  Takes input as componet = return output enchanced componet
export const withRestaurantCard = (ResturantCard) => {
    return (props) => {
        return (<div>
            <label>Promoted</label>
            <ResturantCard {...props}/>
        </div>)
    }
}

export default ResturantCard;