import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG_2_en_US_1x._CB412146952_.jpg"
          alt="Holiday Deals"
        />

        <div className="home__row">
          <Product
            title="Samsung Galaxy S20 FE 5G | 128 GB | US Version Smartphone | Pro-Grade Camera, 30X Space Zoom, Night Mode | Cloud Navy"
            image="https://images-na.ssl-images-amazon.com/images/I/71z2dc%2BXnrL._AC_SX679_.jpg"
            price={697.3}
            rating={4}
          />
          <Product
            title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
            image="https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC_SX425_.jpg"
            price={37.5}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Intel Core i7-9700F Desktop Processor 8 Core 3 GHz speed (Up to 4.7 GHz) Without Processor Graphics LGA1151 300 Series 65W (BX80684I79700F)"
            image="https://images-na.ssl-images-amazon.com/images/I/71i%2BvedHxIL._AC_SY450_.jpg"
            price={259.99}
            rating={5}
          />
          <Product
            title="IPORT LAUNCH (LaunchPort) BaseStation iPad Stand - Compatible with all LAUNCH Cases - Black"
            image="https://images-na.ssl-images-amazon.com/images/I/61zERuA4vlL._AC_SY450_.jpg"
            price={215.0}
            rating={4}
          />
          <Product
            title="EKSA Gaming Headset with 7.1 Surround Sound Stereo, PS4 USB Headphones with Noise Canceling Mic & RGB Light, Compatible with PC, PS4 Console, Laptop (Blue)"
            image="https://images-na.ssl-images-amazon.com/images/I/71cyKXaka0L._AC_SY355_.jpg"
            price={29.74}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="TCL 75 inch 6-Series 4K UHD Dolby Vision HDR QLED ROKU Smart TV - 75R635"
            image="https://images-na.ssl-images-amazon.com/images/I/91CXxVtVkAL._AC_SX679_.jpg"
            price={(1, 399.99)}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
