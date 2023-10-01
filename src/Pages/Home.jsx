import React , {useEffect,useState} from 'react'
import Hero from '../Components/Home/Hero'
import WhyToJoin from '../Components/Home/WhyToJoin'
import HowToJoin from '../Components/Home/HowToJoin'
import Gallery from '../Components/Home/Gallery'
import Question from "../Components/Home/Question"
import Events from "../Components/Home/Events"
import { Spinner } from '../Components/spinner/spinner'

const Home = () => {
  const [loading , setLoading] = useState(true) ;
  useEffect(() => {setTimeout(() => {setLoading(false);}, 1500);}, []);
  return (
    <div>
      {
        loading?(<Spinner/>):(
          <div>
          <Hero/>
          <WhyToJoin/>
          <HowToJoin/>
          <Gallery/>
          <Question/>
          <Events/>
        </div>
        )
      }
    </div>
  )
}

export default Home
