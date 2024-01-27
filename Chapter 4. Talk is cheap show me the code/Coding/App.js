/*
Hot Module Reloading
File Watcher
Minimizing
Image Optimization
Tree Shaking
*/ 

import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "./utils/constants";



// const title= ();-> this means that it is a react component and it returns an object.
const Title = () => (
   <a href="/"> 
      {/**using this href="/" if we click the logo we return abck to our home page */}
   <img className="logo" alt="Logo" src={LOGO_URL}/>
   </a>
);

 const Header = () => {
   return (
     <div className="header">
      {
      /* if we return a react component we can write title as {title} the naming convention must be small*/ }
      
      <Title/> 
      
      {/**  Here the <Title /> we can also write it in this format:- {Title()} as at the end of the day it is a function*/}

      {/** we can write any piece of js inside {} parenthesis */}

      <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About us</li>
            <li>Cart</li>
         </ul>
      </div>
     </div>
   );
 };

const restaurantList= [
      {
      "info": {
      "id": "89711",
      "name": "Wow! Momo",
      "cloudinaryImageId": "5a148e63e9c54942e37627da1aa156be",
      "locality": "Aryapalli",
      "areaName": "Patia",
      "costForTwo": "₹300 for two",
      "cuisines": [
      "Tibetan",
      "Healthy Food",
      "Asian",
      "Chinese",
      "Snacks",
      "Continental",
      "Desserts",
      "Beverages"
      ],
      "avgRating": 4.5,
      "parentId": "1776",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 21,
      "lastMileTravel": 0.6,
      "serviceability": "SERVICEABLE",
      "slaString": "21 mins",
      "lastMileTravelString": "0.6 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-01-28 02:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹99"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-204ba3ab-fc06-41bf-80f8-8297d63bf9ab"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/wow-momo-aryapalli-patia-bhubaneswar-89711",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "461201",
      "name": "Chicago Pizza",
      "cloudinaryImageId": "aebbqy7b36svk8vhtl7y",
      "locality": "Chandaka Industrial Area",
      "areaName": "Patia",
      "costForTwo": "₹350 for two",
      "cuisines": [
      "Pizzas",
      "Italian"
      ],
      "avgRating": 3.9,
      "parentId": "60277",
      "avgRatingString": "3.9",
      "totalRatingsString": "500+",
      "sla": {
      "deliveryTime": 31,
      "lastMileTravel": 2.9,
      "serviceability": "SERVICEABLE",
      "slaString": "31 mins",
      "lastMileTravelString": "2.9 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-01-27 23:59:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-204ba3ab-fc06-41bf-80f8-8297d63bf9ab"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/chicago-pizza-chandaka-industrial-area-patia-bhubaneswar-461201",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "72589",
      "name": "Jugaad Jn",
      "cloudinaryImageId": "fq1uss75jajmt1oueyla",
      "locality": "Kiit Road",
      "areaName": "Patia",
      "costForTwo": "₹150 for two",
      "cuisines": [
      "North Indian",
      "Snacks",
      "Beverages",
      "Desserts",
      "Sweets"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "9963",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 0.6,
      "serviceability": "SERVICEABLE",
      "slaString": "19 mins",
      "lastMileTravelString": "0.6 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-01-27 22:00:00",
      "opened": true
      },
      "badges": {
      "imageBadges": [
      {
      "imageId": "v1695133679/badges/Pure_Veg111.png",
      "description": "pureveg"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {
      "badgeObject": [
      {
      "attributes": {
      "description": "pureveg",
      "imageId": "v1695133679/badges/Pure_Veg111.png"
      }
      }
      ]
      },
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-204ba3ab-fc06-41bf-80f8-8297d63bf9ab"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/jugaad-jn-kiit-road-patia-bhubaneswar-72589",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "187738",
      "name": "hotel Toshali",
      "cloudinaryImageId": "qhep96bo9cw7zskizcr0",
      "locality": "It Park Road",
      "areaName": "Patia",
      "costForTwo": "₹250 for two",
      "cuisines": [
      "Chinese",
      "Indian",
      "Thalis"
      ],
      "avgRating": 4.3,
      "parentId": "103111",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 0.5,
      "serviceability": "SERVICEABLE",
      "slaString": "26 mins",
      "lastMileTravelString": "0.5 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-01-27 23:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-204ba3ab-fc06-41bf-80f8-8297d63bf9ab"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-toshali-it-park-road-patia-bhubaneswar-187738",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "71210",
      "name": "Hot Chilly Fast Food & Restaurant",
      "cloudinaryImageId": "mvohgoovez9vuuuwacgq",
      "locality": "Magnetic Chowk",
      "areaName": "KIIT Square ",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "North Indian",
      "Chinese",
      "Biryani",
      "Kebabs",
      "Fast Food",
      "Indian"
      ],
      "avgRating": 4.1,
      "parentId": "453356",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 28,
      "lastMileTravel": 2.2,
      "serviceability": "SERVICEABLE",
      "slaString": "28 mins",
      "lastMileTravelString": "2.2 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-01-27 22:45:00",
      "opened": true
      },
      "badges": {
      "imageBadges": [
      {
      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
      "description": "OnlyOnSwiggy"
      }
      ]
      },
      "select": true,
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {
      "badgeObject": [
      {
      "attributes": {
      "description": "OnlyOnSwiggy",
      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
      }
      }
      ]
      },
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-204ba3ab-fc06-41bf-80f8-8297d63bf9ab"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/hot-chilly-fast-food-and-restaurant-magnetic-chowk-kiit-square-bhubaneswar-71210",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "71139",
      "name": "Adda Unplugged",
      "cloudinaryImageId": "bzjyvbcne0hojv73jqkp",
      "locality": "Kiit Traffic Square",
      "areaName": "Patia",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Biryani",
      "Hyderabadi",
      "Indian",
      "Chinese",
      "Mexican",
      "Italian",
      "Continental",
      "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "18622",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 23,
      "lastMileTravel": 0.8,
      "serviceability": "SERVICEABLE",
      "slaString": "23 mins",
      "lastMileTravelString": "0.8 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-01-27 23:30:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-204ba3ab-fc06-41bf-80f8-8297d63bf9ab"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/adda-unplugged-kiit-traffic-square-patia-bhubaneswar-71139",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "72736",
      "name": "Richard's Kitchen & Coffee Bar",
      "cloudinaryImageId": "g4qlnockzksn1ki9ykfi",
      "locality": "Kiit Road",
      "areaName": "Patia",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Chinese",
      "Thai"
      ],
      "avgRating": 4.4,
      "parentId": "169403",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
      "deliveryTime": 18,
      "lastMileTravel": 0.8,
      "serviceability": "SERVICEABLE",
      "slaString": "18 mins",
      "lastMileTravelString": "0.8 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-01-27 23:30:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-204ba3ab-fc06-41bf-80f8-8297d63bf9ab"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/richards-kitchen-and-coffee-bar-kiit-road-patia-bhubaneswar-72736",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "338648",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Chandaka Industrial Area",
      "areaName": "Patia",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
      ],
      "avgRating": 4.3,
      "parentId": "547",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
      "deliveryTime": 12,
      "lastMileTravel": 0.4,
      "serviceability": "SERVICEABLE",
      "slaString": "12 mins",
      "lastMileTravelString": "0.4 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-01-28 00:59:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-204ba3ab-fc06-41bf-80f8-8297d63bf9ab"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-chandaka-industrial-area-patia-bhubaneswar-338648",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "92292",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "KIIT Square",
      "areaName": "Patia Village",
      "costForTwo": "₹350 for two",
      "cuisines": [
      "Burgers",
      "American"
      ],
      "avgRating": 4.5,
      "parentId": "166",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 20,
      "lastMileTravel": 0.6,
      "serviceability": "SERVICEABLE",
      "slaString": "20 mins",
      "lastMileTravelString": "0.6 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-01-28 02:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-204ba3ab-fc06-41bf-80f8-8297d63bf9ab"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-kiit-square-patia-village-bhubaneswar-92292",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
];

const ResturantCard= ({cloudinaryImageId, name, cuisines, avgRating})=>{
   return (
       <div className="card">
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
         <h4>{name}</h4>
         <h4>{cuisines?.join(", ")}</h4>
         <h4>{avgRating} rating</h4>
       </div>
   );
};

const Body= ()=>{
   return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant)=>{
         return <ResturantCard{...restaurant.info}/>;
      })}
      </div>
   );
}

const Footer= ()=>{
   return(
 <h4>Footer</h4>
   );
}

const Applayout= ()=>{
   return (
      <> 
     <Header/>
     <Body/>
     <Footer/>
     </>
   );
}
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Applayout />);


// Any piece of JSX code there can be only one parent
//SO <React.Fragment> helps in this case and basically we don't have to write an extra div.
// and React.Fragment is a empty tag so we can write it also like <> </>

//Config Driven UI- When we built a real world application like swiggy, we may built different food offers for different cities and like we will not build different frontend for different cities for that we use Config Driven UI where the entire frontend is controlled by Backend and API so we can show our frontend to the user however we want.

//Copied Swiggy's API and stored in an object RestaurantList where all the different types of restaurants are present and then dynamically called them through RestaurantCard and Displayed it in the body.

//Now we will use PROPS- which is Properties and basically passing datafrom parent component (Body) into child component (RestaurantCard....).

// now react wraps up all the properties--> <RestaurantCard {restaurant= RestaurantList[0]}/> into a variable known as props
//then we destructered it by passing names, cuisines, abgRating instead of props 
//Also we use spread operator [...restaurant.info] to display all the items.
//Then we used map to access each and every object from restaurantList.
//Key- to identify unique items.