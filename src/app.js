import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// React Element

//const heading = React.createElement("h1", {id:"heading"}, "Namaste React");

// JSX Syntax. Babel transpiles it to react.Createelement.
// const heading = (<h1 className="h1class" id="heading">Namaste React</h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // React Title component.
// const Title = () => (<h1> Title </h1>);

// const number = 10;
// // React Components.
// const HeadingComponent = () => {
//   return (<div>
//     <Title />
//     <h2>{number}</h2>
//     <h1 className="heading">Namaste react functional component</h1>
//     </div>
//   );
// }

// // Convert React element to html markup and replace everthing added in root element.
// root.render(<HeadingComponent />);

//
const resObj = [
  {
    "info": {
        "id": "10369",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/2b5e29f4-8edb-400e-a65d-d7617a9ef913_10369.jpg",
        "locality": "Tollygunge (241)",
        "areaName": "Netaji Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Pizzas"
        ],
        "avgRating": 4.3,
        "parentId": "721",
        "avgRatingString": "4.3",
        "totalRatingsString": "31K+",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-09 04:30:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
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
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Pizza.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/pizza-hut-tollygunge-241-netaji-nagar-rest10369",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "103900",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/54a0790c-ca73-4082-91ca-cece2013e469_103900.JPG",
        "locality": "Southcity Mall",
        "areaName": "Jadavpur",
        "costForTwo": "₹450 for two",
        "cuisines": [
            "American",
            "Snacks",
            "Biryani"
        ],
        "avgRating": 4.5,
        "parentId": "547",
        "avgRatingString": "4.5",
        "totalRatingsString": "12K+",
        "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-08 23:00:00",
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
            "header": "₹166 OFF",
            "subHeader": "ABOVE ₹999",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/kfc-southcity-mall-jadavpur-rest103900",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "719437",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/cb985a51-9068-4153-af06-3071c6a2d3d6_719437.JPG",
        "locality": "KASBA",
        "areaName": "Rajdanga road",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "American",
            "Fast Food"
        ],
        "avgRating": 4.6,
        "parentId": "630",
        "avgRatingString": "4.6",
        "totalRatingsString": "3.2K+",
        "sla": {
            "deliveryTime": 41,
            "lastMileTravel": 5.5,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "5.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-09 00:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
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
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "66% OFF",
            "subHeader": "UPTO ₹126",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/mcdonalds-kasba-rajdanga-road-rest719437",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "336697",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/c1cc7ff4-8ec4-4a7b-ab51-b07c3094830a_336697.jpg",
        "locality": "Dhakuria",
        "areaName": "Central Kolkata",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Thalis",
            "North Indian",
            "Biryani"
        ],
        "avgRating": 4.6,
        "parentId": "4925",
        "avgRatingString": "4.6",
        "totalRatingsString": "4.0K+",
        "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-08 23:59:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹66 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/lunchbox-meals-and-thalis-dhakuria-central-kolkata-rest336697",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "3022",
        "name": "Aminia",
        "cloudinaryImageId": "ub35uaf2iferroprejgy",
        "locality": "Golpark",
        "areaName": "Golpark",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "Mughlai",
            "Indian",
            "Kebabs",
            "Tandoor"
        ],
        "avgRating": 4.6,
        "parentId": "3786",
        "avgRatingString": "4.6",
        "totalRatingsString": "68K+",
        "sla": {
            "deliveryTime": 39,
            "lastMileTravel": 3.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "3.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-08 23:59:00",
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
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "5.1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/aminia-golpark-rest3022",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "740258",
        "name": "Bikkgane Biryani",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/1cd82240-d369-47bc-8592-0d90b8cc63fd_740258.jpg",
        "locality": "New Alipore",
        "areaName": "Behala",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "North Indian",
            "Biryani",
            "Snacks"
        ],
        "avgRating": 4.3,
        "parentId": "5070",
        "avgRatingString": "4.3",
        "totalRatingsString": "3.6K+",
        "sla": {
            "deliveryTime": 42,
            "lastMileTravel": 5.7,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "5.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-09 01:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Biryani.png",
                    "description": "Delivery!"
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
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Biryani.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "66% OFF",
            "subHeader": "UPTO ₹126",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/bikkgane-biryani-new-alipore-behala-rest740258",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "803688",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/2df48f78-2201-4d2b-924f-9442665e6caf_803688.JPG",
        "locality": "Peerless",
        "areaName": "Panchasayar",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Fast Food",
            "Burgers",
            "Rolls & Wraps"
        ],
        "avgRating": 4.5,
        "parentId": "116758",
        "avgRatingString": "4.5",
        "totalRatingsString": "2.9K+",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 4.4,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "4.4 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-08 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
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
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹166 OFF",
            "subHeader": "ABOVE ₹999",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/kfc-peerless-panchasayar-rest803688",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "774193",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/69df28a7-700d-4bcd-b9fd-cbeb1950e17e_774193.JPG",
        "locality": "Raja Subodh Mullick Road",
        "areaName": "BAGHAJATIN",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "2456",
        "avgRatingString": "4.5",
        "totalRatingsString": "2.3K+",
        "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 0.6,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "0.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-09 02:55:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
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
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Pizza.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹89"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/dominos-pizza-raja-subodh-mullick-road-baghajatin-rest774193",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "360986",
        "name": "Dariole",
        "cloudinaryImageId": "xxs6se06ptfloeiln1yo",
        "locality": "Naktala",
        "areaName": "Naktala",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Bakery",
            "Desserts"
        ],
        "avgRating": 4.7,
        "parentId": "6960",
        "avgRatingString": "4.7",
        "totalRatingsString": "2.4K+",
        "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-08 21:15:00",
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
            "header": "₹75 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "3.6",
                "ratingCount": "15"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/dariole-naktala-rest360986",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "396874",
        "name": "Wow! Momo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/19/1070eaea-b4f4-4977-bb94-38c653483bd9_396874.JPG",
        "locality": "Raja Scmullick Road",
        "areaName": "Jadavpur",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Momos",
            "Chinese",
            "fastfood",
            "Asian",
            "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "1776",
        "avgRatingString": "4.5",
        "totalRatingsString": "4.6K+",
        "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-09 05:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "bolt/bolt%206.png",
                    "description": "bolt!"
                },
                {
                    "imageId": "Rxawards/_CATEGORY-Chinese.png",
                    "description": "Delivery!"
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
                                "description": "bolt!",
                                "imageId": "bolt/bolt%206.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Chinese.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹166 OFF",
            "subHeader": "ABOVE ₹549",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.0",
                "ratingCount": "576"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/wow-momo-raja-scmullick-road-jadavpur-rest396874",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "336692",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/b10e8e67-4b5d-47f9-85cf-9b15b39e94fa_336692.JPG",
        "locality": "Dhakuria",
        "areaName": "Central Kolkata",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "21809",
        "avgRatingString": "4.5",
        "totalRatingsString": "5.0K+",
        "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-08 23:59:00",
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
            "header": "66% OFF",
            "subHeader": "UPTO ₹126",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/faasos-wraps-rolls-and-shawarma-dhakuria-central-kolkata-rest336692",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "421741",
        "name": "The Brooklyn Creamery - Healthy Ice Cream",
        "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
        "locality": "Jadavpur Central Rd",
        "areaName": "Jadavpur",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts",
            "Healthy Food"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "236673",
        "avgRatingString": "4.7",
        "totalRatingsString": "786",
        "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 1.7,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-08 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "bolt/bolt%206.png",
                    "description": "bolt!"
                }
            ],
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand",
                    "fontColor": "#7E808C"
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
                                "description": "bolt!",
                                "imageId": "bolt/bolt%206.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "brand"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "66% OFF",
            "subHeader": "UPTO ₹126",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/the-brooklyn-creamery-healthy-ice-cream-central-rd-jadavpur-rest421741",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "851900",
        "name": "Wow! Kulfi",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/38c111df-b283-4a87-b0b9-72f6313f95b7_851900.JPG",
        "locality": "Raja Scmullick Road",
        "areaName": "Jadavpur",
        "costForTwo": "₹120 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "501088",
        "avgRatingString": "4.6",
        "totalRatingsString": "74",
        "sla": {
            "deliveryTime": 13,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "10-15 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-09 05:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "bolt/bolt%206.png",
                    "description": "bolt!"
                },
                {
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    "description": "OnlyOnSwiggy"
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
                                "description": "bolt!",
                                "imageId": "bolt/bolt%206.png"
                            }
                        },
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
            "header": "₹166 OFF",
            "subHeader": "ABOVE ₹399",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/wow-kulfi-raja-scmullick-road-jadavpur-rest851900",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "31809",
        "name": "Hatari",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/11/d1382a40-4907-4bf4-9a25-2afbbe724733_31809.jpg",
        "locality": "Opp bijoygarh College",
        "areaName": "Jadavpur",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Chinese",
            "North Indian",
            "Pan-Asian"
        ],
        "avgRating": 4.7,
        "parentId": "4024",
        "avgRatingString": "4.7",
        "totalRatingsString": "12K+",
        "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-08 23:59:00",
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
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
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
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/hatari-opp-bijoygarh-college-jadavpur-rest31809",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "44087",
        "name": "Shiraz Golden Restaurant",
        "cloudinaryImageId": "f5cd921a909842adf479ffc7fedd1968",
        "locality": "Santoshpur",
        "areaName": "Santoshpur",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "Mughlai",
            "Indian",
            "Kebabs",
            "Tandoor"
        ],
        "avgRating": 4.5,
        "parentId": "5569",
        "avgRatingString": "4.5",
        "totalRatingsString": "39K+",
        "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-09 04:00:00",
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
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "3.6",
                "ratingCount": "2.7K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/shiraz-golden-restaurant-santoshpur-rest44087",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "16343",
        "name": "Haji Ali",
        "cloudinaryImageId": "eadd92e5cf369d56eeaf3062622c3c71",
        "locality": "Santoshpur",
        "areaName": "Santoshpur",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "Mughlai",
            "North Indian",
            "Kebabs",
            "Tandoor",
            "Indian",
            "Chinese"
        ],
        "avgRating": 4.4,
        "parentId": "2925",
        "avgRatingString": "4.4",
        "totalRatingsString": "89K+",
        "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-09 02:00:00",
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
            "header": "₹166 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "1.4K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/haji-ali-santoshpur-rest16343",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "755341",
        "name": "Blue Tokai Coffee Roasters",
        "cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
        "locality": "Borough 10",
        "areaName": "Central Kolkata",
        "costForTwo": "₹600 for two",
        "cuisines": [
            "Cafe",
            "Coffee",
            "Beverages"
        ],
        "avgRating": 4.7,
        "parentId": "2682",
        "avgRatingString": "4.7",
        "totalRatingsString": "1.2K+",
        "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-08 22:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "newg.png",
                    "description": "Gourmet"
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
                                "description": "Gourmet",
                                "imageId": "newg.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "15% OFF",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/blue-tokai-coffee-roasters-borough-10-central-kolkata-rest755341",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "831190",
        "name": "Pastas By Pizza Hut",
        "cloudinaryImageId": "dce75bf0d124fb1fa390597828d8ffd9",
        "locality": "Tollygunge (241)",
        "areaName": "Netaji Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pastas"
        ],
        "avgRating": 4.1,
        "parentId": "306806",
        "avgRatingString": "4.1",
        "totalRatingsString": "88",
        "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-09 05:00:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/pastas-by-pizza-hut-tollygunge-241-netaji-nagar-rest831190",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "752986",
        "name": "GetAWay-Ice Creams & Desserts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/12/596a8289-29fc-4eae-bf5b-8da6e21d1494_752986 (2).jpg",
        "locality": "Minapara road",
        "areaName": "Jadavpur",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Desserts",
            "Ice Cream",
            "Healthy Food"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "354819",
        "avgRatingString": "4.5",
        "totalRatingsString": "214",
        "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 1.9,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-15 00:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "bolt/bolt%206.png",
                    "description": "bolt!"
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
                                "description": "bolt!",
                                "imageId": "bolt/bolt%206.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "66% OFF",
            "subHeader": "UPTO ₹126",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/getaway-ice-creams-and-desserts-minapara-road-jadavpur-rest752986",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "716665",
        "name": "Wow! Chicken By Wow! Momo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/192e5b39-c58f-4a78-ba6d-c95674d45613_716665.JPG",
        "locality": "Naktala",
        "areaName": "Naktala",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Burger",
            "American",
            "fastfood"
        ],
        "avgRating": 4.3,
        "parentId": "268366",
        "avgRatingString": "4.3",
        "totalRatingsString": "3.3K+",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-04-09 03:00:00",
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
            "header": "₹166 OFF",
            "subHeader": "ABOVE ₹449",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 12
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-ae401944-d4dc-4837-9bfd-609a7eb2ebcf"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kolkata/wow-chicken-by-wow-momo-naktala-rest716665",
        "type": "WEBLINK"
    }
}
];


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)