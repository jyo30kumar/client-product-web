import React from 'react'
import "./home.css"
//components
import Slider from '../../components/Sliders/Slider'
import Collection from '../../components/Collection/Collection'

const Home = () => {
  return (
    <>
      <div className="home">
        <Slider />        
        <Collection />
      </div>
    </>
  )
}

export default Home