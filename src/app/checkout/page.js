"use client";
import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '@/lib/data';

export default function Checkout() {
  const { cart, cartTotal } = useStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    phone: ""
  });

  useEffect(() => {
    if (cart.length === 0) router.push("/");
  }, [cart, router]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Generate Order ID & timestamp
    const orderId = `AGP-${Date.now()}`;
    const orderDate = new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    // Prepare payload for Google Sheets
    const payload = {
      orderId,
      date: orderDate,
      name: `${formData.firstName} ${formData.lastName}`,
      phone: formData.phone,
      email: formData.email,
      address: `${formData.address}, ${formData.city} - ${formData.zip}`,
      PRODUCTS: cart.map(item => {
        const variantInfo = item.selectedVariant ? ` (${Object.values(item.selectedVariant).join(", ")})` : "";
        return `${item.name}${variantInfo} x${item.quantity}`;
      }).join(", "),
      total: cartTotal()
    };

    // 1️⃣ Save order to Google Sheets 
    try {
      await fetch("https://script.google.com/macros/s/AKfycbz_VMWs870iaM1nbB8DKtg7t6Wb9r6_WjmXiBienPFcw3-AgDoILtmEedY0jHOVcIcA/exec", {
        method: "POST",
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error("Failed to save order to Google Sheets:", error);
    }

    // 2️⃣ Construct WhatsApp message (your format)
    const whatsappMessage = `*✨ Agape Creations — New Order Request!* ✨

🧾 Order ID: ${orderId}
📅 Date: ${orderDate}

*👤 Customer Details:*
Name: ${payload.name}
Phone: ${payload.phone}
Email: ${payload.email}
Address: ${payload.address}

*🛒 Order Summary:*
${cart.map((item, index) => {
  const variantInfo = item.selectedVariant ? ` (${Object.values(item.selectedVariant).join(", ")})` : "";
  return `${index + 1}. ${item.name}${variantInfo} x${item.quantity} - Rs${item.basePrice * item.quantity}`;
}).join("\n")}

*💰 Total Amount:* Rs${payload.total}
--------------------------------
Hi! I would like to confirm this order. Please share payment details.`;

    // 3️⃣ Redirect to WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    setLoading(false);
  };

  if (cart.length === 0) return null;

  return (
    <div className="min-h-screen bg-[#F8F5FC] text-[#2E2433] py-12 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Form */}
        <div>
          <Link href="/" className="text-xs font-bold tracking-widest text-[#8C6A9E] mb-8 block hover:underline flex items-center gap-2">
            <ArrowLeft size={16}/> BACK TO SHOP
          </Link>
          <h2 className="text-3xl font-serif font-bold mb-8 text-[#2E2433]">Checkout</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wide text-[#4A3B52]">Shipping Info</h3>
              <div className="grid grid-cols-2 gap-4">
                <input name="firstName" required onChange={handleInputChange} placeholder="First Name" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
                <input name="lastName" required onChange={handleInputChange} placeholder="Last Name" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
              </div>
              <input name="email" type="email" required onChange={handleInputChange} placeholder="Email Address" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
              <input name="phone" type="tel" required onChange={handleInputChange} placeholder="Phone Number (for coordination)" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
              <input name="address" required onChange={handleInputChange} placeholder="Street Address" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
              <div className="grid grid-cols-2 gap-4">
                <input name="city" required onChange={handleInputChange} placeholder="City" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
                <input name="zip" required onChange={handleInputChange} placeholder="Zip Code" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
              </div>
            </div>

            <div className="pt-6 space-y-4 border-t border-purple-100">
              <h3 className="font-bold text-sm uppercase tracking-wide text-[#4A3B52]">Payment Method</h3>
              <div className="p-4 border border-[#8C6A9E] bg-purple-50 rounded-lg flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#8C6A9E] border-2 border-white ring-1 ring-[#8C6A9E]"></div>
                <span className="font-bold text-[#2E2433]">Cash / UPI (Confirm on WhatsApp)</span>
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-[#25D366] text-white py-5 rounded-xl font-bold tracking-wide hover:bg-[#128C7E] transition disabled:opacity-70 mt-4 shadow-xl transform active:scale-95 duration-200 flex items-center justify-center gap-3">
              <MessageCircle size={24} />
              {loading ? "Opening WhatsApp..." : `COMPLETE ORDER ON WHATSAPP`}
            </button>
            <p className="text-xs text-center text-gray-500">You will be redirected to send your order details.</p>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white p-8 rounded-2xl shadow-sm h-fit border border-purple-50 sticky top-8">
          <h3 className="font-serif text-xl font-bold mb-6 text-[#2E2433]">Your Order</h3>
          <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
            {cart.map((item) => (
              <div key={item.uniqueItemId} className="flex justify-between text-sm items-center border-b border-gray-50 pb-4 last:border-0">
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 bg-purple-50 rounded overflow-hidden flex-shrink-0">
                    <img src={item.image} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <div>
                    <div className="font-bold text-[#2E2433]">{item.name}</div> 
                    <div className="text-xs text-[#5D4B66] font-medium">Qty: {item.quantity}</div>
                    {item.selectedVariant && Object.values(item.selectedVariant).length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {Object.values(item.selectedVariant).map((v, i) => (
                          <span key={i} className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 border border-gray-200">
                            {v}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <span className="font-bold text-[#2E2433]">Rs{item.basePrice * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-purple-50 pt-4 space-y-2">
            <div className="flex justify-between text-[#5D4B66] font-medium"><span>Subtotal</span><span>Rs{cartTotal()}</span></div>
            <div className="flex justify-between text-[#5D4B66] font-medium"><span>Shipping</span><span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">TBD</span></div>
            <div className="flex justify-between text-xl font-bold mt-4 pt-4 border-t border-purple-100 text-[#2E2433]">
              <span>Total</span><span>Rs{cartTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*ONLINE CHECKOUT FORM
export default function Checkout() {
  const { cart, cartTotal, /*openOrderSuccess, closeOrderSuccess } = useStore();
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false); // New state for Amazon-style screen

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // 1. Simulate API Delay
    setTimeout(() => {
      setLoading(false);
      // 2. Open the Success Popup Card
      openOrderSuccess();
      
      // 3. Wait 3 seconds, then show Order Summary Screen (Amazon Style)
      setTimeout(() => {
        closeOrderSuccess(); // Close popup
        setOrderPlaced(true); // Switch entire page view
      }, 3000);
    }, 2000);
  };

  // --- AMAZON STYLE ORDER SUCCESS SCREEN ---
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#F8F5FC] flex items-center justify-center p-6">
        <div className="bg-white max-w-2xl w-full rounded-2xl p-8 md:p-12 text-center shadow-xl border border-green-100">
           <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 animate-in zoom-in duration-500">
              <CheckCircle size={48} strokeWidth={3} />
           </div>
           <h1 className="text-3xl font-serif font-bold text-[#2E2433] mb-4">Order Placed Successfully!</h1>
           <p className="text-[#5D4B66] mb-8 text-lg">
             Thank you for shopping with Agape. Your items will be shipped shortly.
           </p>
           
           <div className="bg-[#F9F7FC] p-6 rounded-xl mb-8 text-left border border-purple-100">
              <h3 className="font-bold text-[#2E2433] mb-2 uppercase text-xs tracking-widest">Order Details</h3>
              <p className="text-[#5D4B66]">Order #AGP-{Math.floor(Math.random() * 10000)}</p>
              <p className="text-[#5D4B66]">Total Amount: <strong>${cartTotal()}</strong></p>
              <p className="text-[#5D4B66]">Payment: Cash on Delivery</p>
           </div>

          <div className="flex gap-4 justify-center">
            <Link href="/" className="inline-flex items-center gap-2 bg-[#2E2433] text-white px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-[#8C6A9E] transition shadow-lg transform active:scale-95">
              VIEW ORDER DETAILS
            </Link>

            <div className="gap-4 mb-3"></div>
            <Link href="/" className="inline-flex items-center gap-2 bg-[#2E2433] text-white px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-[#8C6A9E] transition shadow-lg transform active:scale-95">
              <ShoppingBag size={18} /> CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- STANDARD CHECKOUT FORM ---
  return (
    <div className="min-h-screen bg-[#F8F5FC] text-[#2E2433] py-12 px-6">
      <CheckoutModal />
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Form }
        <div>
           <Link href="/" className="text-xs font-bold tracking-widest text-[#8C6A9E] mb-8 block hover:underline">&larr; BACK TO SHOP</Link>
           <h2 className="text-3xl font-serif font-bold mb-8 text-[#2E2433]">Checkout</h2>
           
           <form onSubmit={handleSubmit} className="space-y-6">
             <div className="space-y-4">
                <h3 className="font-bold text-sm uppercase tracking-wide text-[#4A3B52]">Shipping Info</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input required placeholder="First Name" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
                  <input required placeholder="Last Name" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
                </div>
                <input required type="email" placeholder="Email Address" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
                <input required placeholder="Street Address" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
                <div className="grid grid-cols-2 gap-4">
                  <input required placeholder="City" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
                  <input required placeholder="Zip Code" className="w-full bg-white border border-purple-200 p-4 rounded-lg focus:outline-none focus:border-[#8C6A9E] text-[#2E2433] placeholder-gray-400" />
                </div>
             </div>

             <div className="pt-6 space-y-4 border-t border-purple-100">
                <h3 className="font-bold text-sm uppercase tracking-wide text-[#4A3B52]">Payment</h3>
                <div className="p-4 border border-[#8C6A9E] bg-purple-50 rounded-lg flex items-center gap-3">
                   <div className="w-4 h-4 rounded-full bg-[#8C6A9E] border-2 border-white ring-1 ring-[#8C6A9E]"></div>
                   <span className="font-bold text-[#2E2433]">Cash on Delivery (COD)</span>
                </div>
             </div>
             
             <button 
               disabled={loading}
               className="w-full bg-[#2E2433] text-white py-5 rounded-xl font-bold tracking-wide hover:bg-[#8C6A9E] transition disabled:opacity-70 mt-4 shadow-xl transform active:scale-95 duration-200"
             >
               {loading ? "Processing Order..." : `PLACE ORDER - $${cartTotal()}`}
             </button>
           </form>
        </div>

        {/* Right: Order Summary 
        <div className="bg-white p-8 rounded-2xl shadow-sm h-fit border border-purple-50">
          <h3 className="font-serif text-xl font-bold mb-6 text-[#2E2433]">Your Order</h3>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.uniqueItemId} className="flex justify-between text-sm items-center">
                <div className="flex gap-3">
                   <div className="w-12 h-12 bg-purple-50 rounded overflow-hidden">
                      <img src={item.image} className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <div className="font-bold text-[#2E2433]">{item.name}</div> 
                      <div className="text-xs text-[#5D4B66] font-medium">Qty: {item.quantity}</div>
                   </div>
                </div>
                <span className="font-bold text-[#2E2433]">${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-purple-50 pt-4 space-y-2">
            <div className="flex justify-between text-[#5D4B66] font-medium"><span>Subtotal</span><span>${cartTotal()}</span></div>
            <div className="flex justify-between text-[#5D4B66] font-medium"><span>Shipping</span><span>Free</span></div>
            <div className="flex justify-between text-xl font-bold mt-4 pt-4 border-t border-purple-100 text-[#2E2433]">
              <span>Total</span><span>${cartTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}*/