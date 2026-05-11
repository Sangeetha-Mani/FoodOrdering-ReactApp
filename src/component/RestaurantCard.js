import { CDN_URL } from "../Utils/config";

const ResturantCard = ({resData}) => {
   const {name, cuisines ,avgRating, costForTwo , cloudinaryImageId} = resData.info;
    return (
        <>
            <div className='p-2 m-2 bg-gray-400 flex-wrap hover:bg-gray-500'>
                <img className='w-30' alt='res-logo'  src={ CDN_URL + cloudinaryImageId}/>
                {/* src={ CDN_URL + cloudinaryImageId}/> */}
                <h4 className="font-bold text-lg">{name}</h4>
                <h4 className="w-24 overflow-x-clip">{cuisines.join(',')}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating} Ratings</h4>
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