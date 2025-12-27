"use client";
import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { X, Check, ShoppingBag } from 'lucide-react';

export default function ProductDrawer() {
  const { activeProduct, closeProductDrawer, addToCart } = useStore();
  const [added, setAdded] = useState(false);

  if (!activeProduct) return null;

  const handleAdd = () => {
    addToCart(activeProduct);
    setAdded(true);
    setTimeout(() => { setAdded(false); closeProductDrawer(); }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-[#2E2433]/50 backdrop-blur-sm pointer-events-auto transition-opacity" onClick={closeProductDrawer} />
      
      <div className="bg-[#F8F5FC] w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl shadow-2xl relative pointer-events-auto flex flex-col max-h-[85vh] overflow-hidden animate-in slide-in-from-bottom duration-300">
        
        {/* Header */}
        <div className="p-4 border-b border-purple-100 flex justify-between items-center bg-white">
          <h3 className="font-serif font-bold text-lg text-[#2E2433]">Product Details</h3>
          <button onClick={closeProductDrawer} className="p-2 hover:bg-purple-50 rounded-full text-[#5D4B66]"><X size={20}/></button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 bg-white">
          <div className="aspect-video w-full bg-purple-50 rounded-lg mb-6 overflow-hidden">
             <img src={activeProduct.image} className="w-full h-full object-cover" alt={activeProduct.name} />
          </div>

          <h2 className="text-3xl font-serif text-[#2E2433] mb-2">{activeProduct.name}</h2>
          <p className="text-2xl font-bold text-[#8C6A9E] mb-4">₹{activeProduct.basePrice}</p>
          
          <p className="text-[#5D4B66] leading-relaxed mb-8 text-base font-medium">
            {activeProduct.description || "Designed with intention. A beautiful addition to your collection."}
          </p>
        </div>

        {/* Footer Action */}
        <div className="p-4 border-t border-purple-100 bg-white">
          <button 
            onClick={handleAdd}
            className={`w-full py-4 rounded-xl font-bold tracking-wide transition flex items-center justify-center gap-2 shadow-lg ${
              added ? 'bg-green-700 text-white' : 'bg-[#2E2433] text-white hover:bg-[#8C6A9E]'
            }`}
          >
            {added ? <><Check /> ADDED TO CART</> : <><ShoppingBag size={18}/> ADD TO CART</>}
          </button>
        </div>
      </div>
    </div>
  );
}