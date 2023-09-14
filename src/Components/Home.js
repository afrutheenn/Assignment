import React from 'react'
import Navbar from './Navbar'
import BannerBackGround from "../Assests/home-banner-background.png";
import BannerImage from "../Assests/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
    <Navbar/>  
    <div className="home-banner-container">
      <div className="home-bannerImage-container">
         <img src={BannerBackGround} alt="" /> 

      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">
          Your Favorite Food Delivered Hot & Fresh
        </h1>
        <p className="primary-text">
          Healthy switcher chefs do all the prep work, like peeding,chopping
          & marinating, so you can cook a fresh food
        </p>
        <button className="secondary-button">
         Order Now
        </button>
      </div>

    </div>
    </div>
  )
}

export default Home
