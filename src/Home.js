import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
      <img className="home__image" src={require('./amazon.jpg')} alt=""/>

      <div className="home__row">
        <Product
          id="45657"
          title="The Lean Startup: How Constant Innovation Creatures Radically Successfully Buisnesses Paperback"
          price={11.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
        <Product 
          id="2343454"
          title="Apple iPhone 11 (64GB) - Black (Includes EarPods, Power Adapter)"
          price={799.00}
          rating={4}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-black-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038992"
          />
      </div>

      <div className="home__row">
        <Product 
          id="45456567"
          title="HP 15 10th Gen Intel Core i5 Processor 15.6-inch FHD Laptop (8GB/1TB HDD/Win 10 Home/)"
          price={999.00}
          rating={4}
          image="https://c.s-microsoft.com/en-us/CMSImages/1083_Panel1_Hero_Laptop.jpg?version=bf45ebfb-eeae-5be9-d5a4-f7fcc36c7215"
          />
        <Product 
          id="46567765"
          title="ASIAN Men's Wonder-13 Mesh Sports Running Shoes"
          price={167}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg"
          />
        <Product 
          id="4546545"
          title="Travel 100 warm hiking shirt - men"
          price={49.95}
          rating={3}
          image="https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/travel-100-men-s-trekking-shirt-maroon.jpg?&f=452x452"
          />
      </div>
    </div>
  )
}

export default Home
