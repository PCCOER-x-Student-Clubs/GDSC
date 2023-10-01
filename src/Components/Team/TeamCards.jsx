import React, { useState ,useEffect } from "react";
import { Cards } from './Cards';
import { Spinner } from "../spinner/spinner";
import "./teamcards.css" ;

const TeamCards = () => {

  const CoreTeamList = [
    {
      img: "https://avatars.githubusercontent.com/u/58720128?v=4",
      name: "Shreeram Shanmugasundaram",
      des: "Web Developer",
      linkedin: "/",
      github: "/",
      color: "#ea4335",
    },
  
  {
    img:"https://avatars.githubusercontent.com/u/58720128?v=4",
    name:"Aditya Gaikwad",
    des :"Web Developer",
    linkedin :"/",
    github:"/",
    color:"#34A853"
  },{
    img:"https://avatars.githubusercontent.com/u/58720128?v=4",
    name:"Sneha Pujari",
    des :"Web Developer",
    linkedin :"/",
    github:"/",
    color:"#F9BC15"
  },{
    img:"https://avatars.githubusercontent.com/u/58720128?v=4",
    name:"Kush Agrawal",
    des :"Web Developer",
    linkedin :"/",
    github:"/",
    color:"#4285F4"
  
  }]

  const [loading , setLoading] = useState(true) ;
  useEffect(() => {setTimeout(() => {setLoading(false);}, 2000);}, []);
  return (
    <div className="teamcards">
      {
        loading ? (
          <Spinner />
        ) : (
          <Cards teamList={CoreTeamList} />
        )
      }
    </div>
  );
};

export default TeamCards;
