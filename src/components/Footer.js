import { Instagram, Mail, Facebook, Twitter, MapPin, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#330033] text-white pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-700 pb-16">
        <div className="col-span-1 md:col-span-2 pr-8">
          <h2 className="text-3xl font-serif mb-4">AGAPE (ä-gá-pā)</h2>
          <p className="text-gray-400 leading-relaxed max-w-md mb-6">
            "The highest form of love." We create contemporary goods inspired by truths that have a direct connection with our faith.
          </p>
          <div className="flex gap-4 text-gray-400">
            <a
              href="https://www.instagram.com/agape.creations.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
            <Instagram size={20} className="hover:text-white cursor-pointer"/></a>
            {/*<a
            href="https://www.linkedin.com/in/christina-dsilva"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
           >
            <Linkedin size={20} className="hover:text-white cursor-pointer"/> </a>*/}
          </div>
        </div>

        {/*
        <div>
          <h3 className="font-bold tracking-widest text-sm mb-6 uppercase text-gray-500">Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>
        */}

        <div>
          <h3 className="font-bold tracking-widest text-sm mb-6 uppercase text-gray-500">Contact</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-1 flex-shrink-0"/> 221 Baker St, Koramangala <br/>Bengaluru, Karnataka 560029</li>
            <li className="flex items-center gap-3"><Instagram size={16}/> <a
              href="https://instagram.com/agape.creations.official"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white">
            agape.creations.official</a></li>
            <li className="flex items-center gap-3"><Mail size={16}/> <a
              href="mailto:christi.dsi@gmail.com"
              className="hover:text-white">
            christi.dsi@gmail.com</a></li>
            <li className="flex items-center gap-3"><Phone size={16}/><a
              href="https://wa.me/919145170913"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"> 
              +91 91451 70913
            </a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-purple-100 text-xs">© 2025 Agape Brand. All rights reserved.</div>
    </footer>
  );
}