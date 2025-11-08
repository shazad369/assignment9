import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
           <footer class="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
  <aside>
  <div className='text-3xl font-bold text-green-400'>
    Green Nest
  </div>
    <p class="font-bold">
Quick Links (About, Contact, Privacy Policy)
      <br />
    Social Media Icons ( Facebook,Youtube,whatsapp )
    </p>
    <p>“© 2025 GreenNest. {new Date().getFullYear()} - “© 2025 GreenNest. All rights reserved.”
</p>
  </aside>
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a>
        <div>
          <p className='text-6xl'> <CiFacebook /></p>
     
        </div>
      </a>
      <a>
    <div className='text-6xl'>
      <FaYoutube />

    </div>
      </a>
      <a>
    <div className='text-6xl'>
      <FaWhatsappSquare />

    </div>
      </a>
    </div>
  </nav>
</footer>
            
        </div>
    );
};

export default Footer;