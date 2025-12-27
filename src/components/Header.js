"use client";
import { ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Header() {
  const { toggleCart, toggleMenu, isMenuOpen, cart, setCategory } = useStore();

  const handleLinkClick = (cat) => {
    setCategory(cat);
    toggleMenu(); // Close menu
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-[#F9F7FC]/95 backdrop-blur-xl border-b border-purple-100 text-[#2E2433] transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

          {/* LEFT: Logo */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setCategory("All")}>
            <img src="/Agape_Creations_Logo.png" alt="Agape Logo" className="h-12 w-auto" />
          </div>

          {/* CENTER: AGAPE text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-serif font-bold tracking-tighter cursor-pointer" onClick={() => setCategory("All")}>
            AGAPE
          </div>

          {/* RIGHT: Hamburger + Cart */}
          <div className="flex gap-6 items-center">
          {/*<button onClick={toggleMenu} className="hover:text-[#9f4a3e]"><Menu /></button>*/}

            <button onClick={toggleCart} className="relative group">
              <ShoppingBag className="group-hover:text-[#9f4a3e] transition" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#9f4a3e] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Overlay 
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleMenu} 
      />

      {/* Menu Drawer *
      <div className={`fixed top-0 right-0 h-full w-[300px] bg-[#faf9f6] z-[70] shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-stone-200">
          <span className="font-serif font-bold text-xl">Menu</span>
          <button onClick={toggleMenu}><X /></button>
        </div>
        <nav className="text-gray p-6 space-y-2">
          {["All", "Posters", "Stickers", "Diaries", "Laptop Skins", "Badges"].map((item) => (
            <button key={item} onClick={() => handleLinkClick(item)} className="w-full flex justify-between py-4 text-purple-900 border-b border-stone-900 text-left hover:text-[#ffffff] hover:pl-2 transition-all">
              {item} <ChevronRight size={16} className="text-gray-900"/>
            </button>
          ))}
        </nav>
      </div>*/}
    </>
  );
}
