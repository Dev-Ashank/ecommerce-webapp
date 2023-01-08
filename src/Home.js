import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className='Home'>
        <div className="Home_container">
            <img className='home_image' src="https://m.media-amazon.com/images/I/71F75NHXTGL._SX3000_.jpg" alt="image" />
        </div>
        <div className="home_row">
            <Product 
            id = {34793}
            title = "AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV with
          Dolby Atmos and Dolby Vision (Black) "
            rating={5} price ={30999}
            image = "https://m.media-amazon.com/images/I/51z60rNcKSL._SY300_SX300_QL70_FMwebp_.jpg"

          />
            <Product 
            id = {34234}
            title = "LG 8 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine with Inbuilt heater (FHP1208Z3W, Blue White, AI DD Technology & Steam for Hygiene)"
            rating={4}
            price = {41999}
            image = "https://m.media-amazon.com/images/I/71acyvQ3JvL._SX679_.jpg"
            />
            <Product />
            <Product />
        </div>
        <div className="home_row">
        <Product />
            <Product />
            <Product />
            
        </div>
        <div className="home_row">
        <Product title = "AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV with
          Dolby Atmos and Dolby Vision (Black) "
        rating={5} price ={30999}
        image = "https://m.media-amazon.com/images/I/51z60rNcKSL._SY300_SX300_QL70_FMwebp_.jpg"

          />
        </div>
    </div>
  )
}

export default Home