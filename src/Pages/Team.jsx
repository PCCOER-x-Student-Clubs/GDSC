import React , {useEffect , useState} from "react";
import "./team.css";
import LineTitle from "../Components/Common/LineTitle";
import TeamCards from "../Components/Team/TeamCards";
import { Spinner } from "../Components/spinner/spinner"
const Team = () => {
  const [loading , setLoading] = useState(true) ;
  useEffect(() => {setTimeout(() => {setLoading(false);}, 1500);}, []);
  return (
    <div>
      {
        loading ? (<Spinner/>):(
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
          <LineTitle title="Core Team" />
          <TeamCards  />
          <LineTitle title="Team Member" />
          <TeamCards  />
        </div>
        )
      }
    </div>
  );
};

export default Team;
