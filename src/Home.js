import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="Home">
      <div className="Home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71F75NHXTGL._SX3000_.jpg"
          alt="image"
        />
      </div>
      <div className="home_row">
        <Product
          id={34793}
          title="AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV with Dolby Atmos and Dolby Vision (Black) "
          rating={5}
          price={30999}
          image="https://m.media-amazon.com/images/I/51z60rNcKSL._SY300_SX300_QL70_FMwebp_.jpg"
        />
        <Product
          id={34234}
          title="LG 8 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine with Inbuilt heater (FHP1208Z3W, Blue White, AI DD Technology & Steam for Hygiene)"
          rating={4}
          price={41999}
          image="https://m.media-amazon.com/images/I/71acyvQ3JvL._SX679_.jpg"
        />
        <Product
          id={24434}
          title="Amazon Brand - Solimo Elite Pro Multi Adjustable Headrest Office Chair (Nylon, Black)"
          price={7999}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-qbJUDS1L._SY879_.jpg"
        />
        <Product
          id={34566}
          title="HP All-in-One AMD Ryzen 3 3250U-21.5 inch(54.61cm) FHD, Micro-Edge, Anti-Glare Display/8GB RAM/1TB HDD/Wireless Keyboard & Mouse/AMD Radeon Graphics/720p HD Camera/Win 11/MSO 2021, 22-dd0302in"
          price={39490}
          image="https://m.media-amazon.com/images/I/61OgnFc+NTL._SX679_.jpg"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id={24434}
          title="Amazon Brand - Solimo Elite Pro Multi Adjustable Headrest Office Chair (Nylon, Black)"
          price={7999}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-qbJUDS1L._SY879_.jpg"
        />
        <Product
          id={34566}
          title="HP All-in-One AMD Ryzen 3 3250U-21.5 inch(54.61cm) FHD, Micro-Edge, Anti-Glare Display/8GB RAM/1TB HDD/Wireless Keyboard & Mouse/AMD Radeon Graphics/720p HD Camera/Win 11/MSO 2021, 22-dd0302in"
          price={39490}
          image="https://m.media-amazon.com/images/I/61OgnFc+NTL._SX679_.jpg"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          title="AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV with Dolby Atmos and Dolby Vision (Black) "
          rating={5}
          price={30999}
          image="https://m.media-amazon.com/images/I/51z60rNcKSL._SY300_SX300_QL70_FMwebp_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
