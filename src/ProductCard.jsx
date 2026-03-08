import React from 'react';

const ProductCard = ({ name, price, image, inStock }) => {
  return (
    <div className="group relative bg-white border border-slate-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden w-72">
      {/* Image Container with Zoom Effect */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
          inStock ? 'bg-emerald-500/80 text-white' : 'bg-rose-500/80 text-white'
        }`}>
          {inStock ? '✨ Available' : '⌛ Out of Stock'}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-800 mb-1">{name}</h3>
        <p className="text-2xl font-black text-indigo-600 mb-4">${price}</p>
        
        <button 
          disabled={!inStock}
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95 ${
            inStock 
            ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200' 
            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          {inStock ? 'Add to Cart' : 'Notify When Ready'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;