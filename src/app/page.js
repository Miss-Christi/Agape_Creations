"use client";
import { useStore } from "../store/useStore";
import { getProducts } from "../lib/data";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header"; 
import CartDrawer from "../components/CartDrawer";
import ProductDrawer from "../components/ProductDrawer";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";
import CategoryBar from "../components/CategoryBar";

export default function Home() {

  const { selectedCategory } = useStore();
  const [PRODUCTS, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  if (!PRODUCTS || PRODUCTS.length === 0) {
    return <Loading />;
  }
  

  // --- CHANGE 1: Calculate Categories Dynamically ---
  // This ensures "Bookmarks", "Posters", etc. appear automatically
  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

  // Filter Logic controls ONLY the main grid
  const filteredProducts = selectedCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#d3b3f0] flex flex-col font-sans">
      <Loading />
      <Header />
      <CartDrawer />
      <ProductDrawer />

      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] md:h-[85vh] flex items-center justify-center text-center px-4 text-white overflow-hidden">        <HeroCarousel />
        <HeroCarousel />
        <div className="relative z-20 max-w-4xl space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-block border border-white/40 px-3 py-1 md:px-4 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase backdrop-blur-sm">Est. 2025</div>
          <h1 className="text-4xl md:text-9xl font-serif leading-none tracking-tight drop-shadow-xl">
            Created with <br/> <span className="italic font-light">Purpose.</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-lg mx-auto leading-relaxed drop-shadow-md">
            Wear your faith. Live your purpose.
          </p>
          <div className="pt-2 md:pt-4">
             <a href="#new-arrivals" className="bg-white text-[#2E2433] px-6 py-2 md:px-8 md:py-3 text-xs md:text-base rounded-full font-bold tracking-widest hover:bg-[#E0B0FF] transition shadow-lg">
               EXPLORE
             </a>
          </div>
        </div>
      </section>

      {/* 2. NEW ARRIVALS (Static Slice) */}
      <section id="new-arrivals" className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-6 md:mb-10">
            <div>
                <h2 className="text-2xl md:text-3xl font-serif text-[#2E2433]">New Arrivals</h2>
                <p className="text-xs md:text-base text-[#9F86C0]">Fresh from the studio.</p>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {["ls1", "po8", "di6", "po31"]
            .map(id => PRODUCTS.find(p => p.id === id))
            .filter(Boolean) // ✅ remove any undefined
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}

          {/*Dynamic selection*/}
          {/*{PRODUCTS.slice(0, 4).map((PRODUCTS) => (
            <ProductCard key={PRODUCTS.id} PRODUCTS={PRODUCTS} />
          ))}*/}
        </div>
      </section>

      {/* 3. AGAPE DEFINITION (Purple Block) */}
      <section className="py-24 px-6 bg-[#2E2433] text-white text-center relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-[#9F86C0] rounded-full blur-3xl opacity-20"></div>
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-sm font-bold tracking-[0.4em] text-[#E0B0FF] uppercase">Our Name</h2>
            <h3 className="text-5xl font-serif">AGAPE (ä-gá-pā)</h3>
            <p className="text-xl text-purple-200 italic font-serif">"The highest form of love."</p>
            <p className="text-gray-300 leading-loose">
            Born from an ancient Greek word in the New Testament, AGAPE represents love in its purest form. Every design we create is inspired by faith-filled truths that remain timeless and intentional in a constantly changing world —rooted in purpose and shaped by belief.            </p>
        </div>
      </section>

      {/* 4. CATEGORY BAR (Sticky) */}
      <CategoryBar categories={categories} />

      {/* 5. MAIN FILTERED GRID */}
      <section id="shop-grid" className="max-w-[1600px] mx-auto px-4 md:px-6 py-12 md:py-16 min-h-[50vh]">
        <div className="flex items-center gap-4 mb-6 md:mb-8">
           <div className="h-px bg-purple-200 flex-1"></div>
           <h2 className="text:xl md:text-2xl font-serif text-[#2E2433] uppercase tracking-widest">{selectedCategory}</h2>
           <div className="h-px bg-purple-200 flex-1"></div>
        </div>
        
        {/* Updated Grid: sm:grid-cols-2 for tablet, md:grid-cols-3 for laptops, lg:grid-cols-4 for desktops */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-forwards">          
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
           <div className="text-center py-20 text-gray-400 italic">Select a category above to view products.</div>
        )}
      </section>

      {/* 6. BESTSELLERS (Static Slice) */}
      <section className="py-16 md:py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2E2433] mb-8 md:mb-12 text-center">Community Favorites</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-8">
                {/* --- CHANGE 3: Update slice to show Posters/Skins instead of just Bookmarks --- */}
                {/* Using indices 23-26 shows Posters from your new list */}
                {PRODUCTS.length > 0 ? PRODUCTS.slice(109,115).map((product) => (
                    <ProductCard key={`bs-${product.id}`} product={product} />
                )) : (
                    // Fallback loading skeletons if needed, or just empty
                    <div className="col-span-3 text-center text-gray-400">Loading Bestsellers...</div>
                )}
            </div>
        </div>
      </section>

      {/* 7. BRAND STORY (Toggle Flip) */}
      <section className="py-24 md:py-32 relative overflow-hidden transition-all duration-500">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 sepia" alt="Background"/>
        <div className="absolute inset-0 bg-[#2E2433]/10"></div>
        
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6 perspective-1000">
            {!isStoryOpen ? (
                <div className="animate-in fade-in zoom-in duration-300">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#2E2433]">Rooted in Love</h2>
                    <p className="text-base md:text-lg text-[#2E2433] mb-8 font-medium">
                        "We are a small brand with a big heart. Little reminders of hope for your daily journey."
                    </p>
                    <button 
                        onClick={() => setIsStoryOpen(true)}
                        className="inline-block border-2 border-[#2E2433] text-[#2E2433] px-8 py-3 font-bold hover:bg-[#2E2433] hover:text-white transition rounded-full text-sm md:text-base"
                    >
                        READ OUR STORY
                    </button>
                </div>
            ) : (
                <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border border-purple-100 animate-in flip-in-x duration-500 relative">
                    <button 
                        onClick={() => setIsStoryOpen(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-[#2E2433] transition"
                    >
                        <X size={24} />
                    </button>
                    <h2 className="text-2xl md:text-3xl font-serif mb-4 text-[#2E2433]">Our Journey</h2>
                    <p className="text-sm md:text-base text-[#5D4B66] leading-relaxed mb-4 text-left">
                        Agape Creations began with a simple prayer: to create beautiful, tangible reminders of God's love in a chaotic world. 
                    </p>
                    <p className="text-sm md:text-base text-[#5D4B66] leading-relaxed text-left">
                        What started as a few sketches has grown into a community of believers who wear their faith proudly. Every design is crafted with intention, prayer, and—most importantly—Agape love.
                    </p>
                    <div className="mt-6 pt-6 border-t border-purple-100">
                        <p className="font-handwriting text-2xl text-[#8C6A9E] transform -rotate-2">Miss Christi</p>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Founder</p>
                    </div>
                </div>
            )}
        </div>
      </section>

      {/* 8. TESTIMONIALS */}

      <div className="bg-purple-200 py-12 md:py-16 text-black relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">What Our Community Says</h2>
          
          <div className="grid grid-cols-3 gap-3 md:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/50 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-indigo-700/50">
              <div className="text-2xl md:text-4xl text-indigo-400 font-serif leading-none mb-2 md:mb-4">"</div>
              <p className="text-xs md:text-lg text-purple-900 italic mb-4 line-clamp-4 md:line-clamp-none">
                The quality is amazing! It's so soft and the message starts so many conversations.
              </p>
              <div className="flex items-center">
                <div className="h-6 w-6 md:h-10 md:w-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center font-bold text-white text-xs md:text-lg shadow-lg">S</div>
                <div className="ml-2 md:ml-3">
                  <p className="font-semibold text-purple-900 text-[10px] md:text-base">Sarah J.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/50 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-indigo-700/50">
              <div className="text-2xl md:text-4xl text-indigo-400 font-serif leading-none mb-2 md:mb-4">"</div>
              <p className="text-xs md:text-lg text-purple-900 italic mb-4 line-clamp-4 md:line-clamp-none">
                Fast delivery. The daily grace journal is essential to my morning routine.
              </p>
              <div className="flex items-center">
                <div className="h-6 w-6 md:h-10 md:w-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center font-bold text-white text-xs md:text-lg shadow-lg">M</div>
                <div className="ml-2 md:ml-3">
                  <p className="font-semibold text-purple-900 text-[10px] md:text-base">Mike R.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/50 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-indigo-700/50">
              <div className="text-2xl md:text-4xl text-indigo-400 font-serif leading-none mb-2 md:mb-4">"</div>
              <p className="text-xs md:text-lg text-purple-900 italic mb-4 line-clamp-4 md:line-clamp-none">
                My sister loves the tote bag. Print quality is fantastic. Highly recommend!
              </p>
              <div className="flex items-center">
                <div className="h-6 w-6 md:h-10 md:w-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center font-bold text-white text-xs md:text-lg shadow-lg">P</div>
                <div className="ml-2 md:ml-3">
                  <p className="font-semibold text-purple-900 text-[10px] md:text-base">Priya K.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 9. SUBSCRIBE */}
      <Subscription />

      <Footer />
    </div>
  );
}