import React from 'react';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  var products = [
    {
      id: 1,
      image: "https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-600x600.jpg",
      name: "iPhone 10 64GB",
      price: 15000000,
      status: false
    },
    {
      id: 2,
      image: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-600x600.jpg",
      name: "iPhone 9 64GB",
      price: 9000000,
      status: true
    },
    {
      id: 3,
      image: "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-black-600x600.jpg",
      name: "iPhone 11 64GB",
      price: 22000000,
      status: false
    },
    {
      id: 4,
      image: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-600x600.jpg",
      name: "iPhone 8 64GB",
      price: 8000000,
      status: true
    }
  ];
  var elements = products.map((product, index) => {
    var result = '';
    if (product.status) {
      result = <Product
        key={index}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    }
    return result;
  })
  return (
    <div>
      <Header />
      <div className="row row-cols-1 row-cols-md-4 mt-4 ml-4">
        {/* <Product
          image="https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-600x600.jpg"
          name="iPhone 10 64GB"
          price="15000000"
        />
        <Product
          image="https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-600x600.jpg"
          name="iPhone 9 64GB"
          price="9000000"
        />
        <Product
          image="https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-black-600x600.jpg"
          name="iPhone 11 64GB"
          price="22000000"
        /> */}
        {elements}
      </div>
    </div>
  );
}

export default App;
