import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div
        className="home">
            <div
            className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG_2_en_US_1x._CB412146952_.jpg"
                alt="Holiday Deals"
                />

                <div
                className="home__row">
                    <Product />
                    <Product/>
                </div>

                <div
                className="home__row">
                    {/* Product */}
                    {/* Product */}
                </div>

                <div
                className="home__row">
                    {/* Product */}
                </div>
            </div>
        </div>
    )
}

export default Home
