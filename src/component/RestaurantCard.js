import { CDN_URL } from "../Utils/constants";

const ResturantCard = ({resData}) => {
   const {name, cuisines ,avgRating, costForTwo , cloudinaryImageId} = resData.info;
    return (
        <>
            <div className='card-container'>
                <img alt='res-logo'  src={ CDN_URL + cloudinaryImageId}/>
                <h4>{name}</h4>
                <h4>{cuisines.join(',')}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating} Ratings</h4>
            </div>
        </>
    )
}

export default ResturantCard;