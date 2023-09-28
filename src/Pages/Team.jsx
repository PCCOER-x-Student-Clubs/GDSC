import React from "react";
import "./team.css";
import LineTitle from "../Components/Common/LineTitle";
import TeamCards from "../Components/Team/TeamCards";

const Leads=[{
img: "",
name:"Pushkar Sarda",
des:"Lead",
linkedin:"https://www.linkedin.com/in/pushkar-sarda",
github:"https://github.com/PushkarSarda",
color: "#ea4335",
},
{
img: "",
name:"Yash Yadwadkar",
des:"Co-Lead",
linkedin:"https://www.linkedin.com/in/yash-yadwadkar",
github:"https://github.com/YashYadwadkar",
color:"#34A853"

}]

const CoreTeamList = [
  {
    img: "https://avatars.githubusercontent.com/u/58720128?v=4",
    name: "Ashwin Lavate",
    des: "Technical Head",
    linkedin: "https://www.linkedin.com/in/ashwin-lavate-a5a74b22b",
    github: "https://github.com/Ashwin-510",
    color: "#ea4335",
  },
 

{
  img:"https://avatars.githubusercontent.com/u/58720128?v=4",
  name:"Ayush Kulkarni",
  des :"Executive Head",
  linkedin :"https://www.linkedin.com/in/ayush-kulkarni-598bb3236",
  github:"/",
  color:"#34A853"
  
},{
  img:"https://avatars.githubusercontent.com/u/58720128?v=4",
  name:"Sahil Shinde",
  des :"Design Head",
  linkedin :"https://www.linkedin.com/in/sahil-shinde-03215022a/",
  github:"https://github.com/SahilShinde09",
  color:"#F9BC15"
  
},{
  img:"https://avatars.githubusercontent.com/u/58720128?v=4",
  name:"Marketing Head",
  des :"Piyush Bhone",
  linkedin :"https://www.linkedin.com/in/piyush-bhone",
  github:"https://github.com/bhonepiyush",
  color:"#4285F4"

},
{
  img: "https://avatars.githubusercontent.com/u/58720128?v=4",
  name: "Purva Parab",
  des: "Editorial",
  linkedin: "https://www.linkedin.com/in/purva-parab-657a7a236",
  github: "https://github.com/Purva225577",
  color: "#ea4335",
},
 
]


const Facilitators =[{
  img:"",
  name:"Sammruddhi Kashmire",
  des:"Cloud Facilitator",
  linkedin:"https://www.linkedin.com/in/samruddhi-kashmire",
  github:"https://github.com/samruddhikashmire",
  color:"#ea4335",
},
{
  img:"",
  name:"Arya Janjire",
  des:"Android Facilitator",
  linkedin:"www.linkedin.com/in/arya-janjire",
  github:"https://github.com/AryaJanjire",
  color:"#34A853",
},
{
  img:"",
  name:"Jay Firke",
  des:" Flutter Facilitator",
  linkedin:"/",
  github:"/",
  color:"#F9BC15",
},
{
  img:"",
  name:"Ashwin Lavate",
  des:"Competitive Programming Facilitator",
  linkedin:"https://www.linkedin.com/in/ashwin-lavate-a5a74b22b",
  github:"",
  color:"#4285F4",
},
{
  img:"",
  name:"Ishan Honmode",
  des:"AI Facilitator",
  linkedin:"https://www.linkedin.com/in/ishanhonmode/",
  github:"https://github.com/raygrou3",
  color:"#ea4335",
},
{
  img:"",
  name:"Aman Kocharekar",
  des:"ML Facilitator",
  linkedin:"https://www.linkedin.com/in/amankocharekar/",
  github:"https://github.com/Rex1713",
  color:"#34A853",
},
{
  img:"",
  name:"Harsh Singh",
  des:"Cybersecurity Facilitator",
  linkedin:"https://www.linkedin.com/in/harsh-singh-a24855236",
  github:"https://github.com/Harshcreator",
  color:"#F9BC15",
},


{
  img:"",
  name:"Shreeram Shanmugasundaram",
  des:"Full Stack Development Facilitator",
  linkedin:"https://in.linkedin.com/in/shreeram-shanmugasundaram",
  github:"https://github.com/shreeramshanmugasundaram",
  color:"#4285F4",
},
{
  img:"",
  name:"Aditya Gaikwad",
  des:"Backend Facilitator",
  linkedin:"https://www.linkedin.com/in/aditya-gaikwad-835448255/",
  github:"https://github.com/aditya-gaikwad-1233",
  color:"#ea4335",
},
{
  img:"",
  name:"Kush Agrawal",
  des:"Frontend Facilitator",
  linkedin:"https://www.linkedin.com/in/kush-agrawal-7879a424a/",
  github:" https://github.com/kush2863",
  color:"#34A853",
}]

const Team_members =[{
  img:"",
  name:"Vishnu Tiwari",
  des:"CP Member",
  linkedin:"",
  github:"",
  color:"#ea4335",
},{
  img:"",
  name:"Vishal khot",
  des:"CP Member",
  linkedin:"https://www.linkedin.com/in/vishal-khot-326a79236",
  github:" ",
  color:"#34A853",
},{
  img:"",
  name:"Dhiraj marathe",
  des:"CP Member",
  linkedin:"https://www.linkedin.com/in/marathe-dhiraj-05b7a0236/",
  github:"https://github.com/dhiraj9087",
  color:"#F9BC15",
},
{
  img:"",
  name:"Malhar Gujar",
  des:"Executive Member",
  linkedin:"https://www.linkedin.com/in/malhar-gujar-703093930719122003",
  github:"",
  color:"#4285F4",
},
{
  img:"",
  name:"Rohit Shingavi",
  des:"Executive Member",
  linkedin:"https://www.linkedin.com/in/rohitshingavi",
  github:"",
  color:"#ea4335",
},
{
  img:"",
  name:"Bhavesh Bhalerao",
  des:"Executive Member",
  linkedin:"https://www.linkedin.com/in/bhavesh-bhalerao-8a9abb247",
  github:"",
  color:"#34A853",
},
{
  img:"",
  name:"Arnav wani",
  des:"Executive Member",
  linkedin:"https://www.linkedin.com/in/arnav-wani-bb884b253",
  github:"https://github.com/Arn05",
  color:"#F9BC15",
},
{
  img:"",
  name:"Kavya Agrawal",
  des:"Executive Member",
  linkedin:"https://www.linkedin.com/in/kavya-agrawal-894176249",
  github:"",
  color:"#4285F4",
},
{
  img:"",
  name:"Ojas Patil",
  des:"Executive Member",
  linkedin:"www.linkedin.com/in/ojalpatil",
  github:"https://github.com/coderexp20",
  color:"#ea4335",
},
{
  img:"",
  name:"Pranav Nebhanani",
  des:"Executive Member",
  linkedin:"https://www.linkedin.com/in/pranav-nebhnani-00b670259",
  github:"https://github.com/pranavnebhnani24",
  color:"#34A853",
},
{
  img:"",
  name:"Advait Mandhare",
  des:"Executive Member",
  linkedin:"https://www.linkedin.com/in/advaitmandhare  ",
  github:"https://github.com/advaitmandhare",
  color:"#F9BC15",
},
{
  img:"",
  name:"Shringaar Ghatbandhe",
  des:"Executive Member",
  linkedin:"www.linkedin.com/in/shringaar-kiran-17134b253",
  github:"https://github.com/ShringaarKiran",
  color:"#4285F4  ",
},
{
  img:"",
  name:"Vedant Patil",
  des:"Design Team",
  linkedin:"https://www.linkedin.com/in/vedant-patil-564754253",
  github:"",
  color:"#ea4335",
},
{
  img:"",
  name:"Sahil Kale",
  des:"Design Team",
  linkedin:"https://www.linkedin.com/in/sahil-kale-72847a259",
  github:"https://github.com/sevilOO",
  color:"#34A853",
},
{
  img:"",
  name:"Ayush Kamthe",
  des:"Marketing Team",
  linkedin:"https://www.linkedin.com/in/kamthe-ayush-0696a223b",
  github:"",
  color:"#F9BC15",
},

{
  img:"",
  name:"Yash Wagh",
  des:"Marketing Team",
  linkedin:"https://www.linkedin.com/in/yash-wagh-b515b0254/",
  github:"https://github.com/waghyash01",
  color:"#4285F4",
},{
  img:"",
  name:"Sneha Adhalrao",
  des:"Marketing Team",
  linkedin:"https://www.linkedin.com/in/sneha-adhalrao-1b3138263",
  github:"https://github.com/SnehaAdhalrao",
  color:"#ea4335",
},{
  img:"",
  name:"Alisha Borde",
  des:"Marketing Team",
  linkedin:"https://www.linkedin.com/in/alisha-borde-00a818259",
  github:"",
  color:"#34A853",
},{
  img:"",
  name:"Sejal Rathod",
  des:"Social Media Team",
  linkedin:"https://www.linkedin.com/in/sejal-rathod-12b817259",
  github:"",
  color:"#F9BC15",
},{
  img:"",
  name:"Aum Dhavale",
  des:"Digital Content-Photography",
  linkedin:"",
  github:"",
  color:"#4285F4",
},{
  img:"",
  name:"Shashank Khengre",
  des:"Digital Content- Videography",
  linkedin:"",
  github:"",
  color:"#ea4335",
}
]



const Team = () => {
  return (
    <div>
      <header class="center-content center-div Team_Header">
        <h1>Our Team</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius
          ipsum autem cum aut, perferendis, eos ratione voluptatibus officiis ut
          consectetu
        </p>
      </header>
      <LineTitle title="Leads" />
      <TeamCards teamList={Leads} />
      <LineTitle title="Core Team" />
      <TeamCards teamList={CoreTeamList} />
      <LineTitle title="Facilitators" />
      <TeamCards teamList={Facilitators} />
      <LineTitle title="Team Members" />
      <TeamCards teamList={Team_members} />
    </div>
  );
};

export default Team;
