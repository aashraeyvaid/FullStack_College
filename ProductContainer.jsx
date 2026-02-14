import React from 'react';
import ProductCard from './ProductCard';

function ProductContainer() {
  const products = [
    {
      id: 1,
      name: "Premium Laptop",
      price: 1299,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=500",
      inStock: true
    },
    {
      id: 2,
      name: "Studio Headphones",
      price: 350,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500",
      inStock: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-10">
      <div className="flex flex-wrap gap-8 justify-center">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;