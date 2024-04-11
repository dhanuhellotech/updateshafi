  import React from 'react'
  import { FloatingWhatsApp } from 'react-floating-whatsapp';
  import './whatsapp.css'
  export default function WhatsApp({ phoneNumber }) {
      const onMessageReceived = (message) => {
          // Handle the received message (e.g., send to WhatsApp)
          const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(whatsappLink, '_blank');
        };
    return (
      <div className="whatsapp-container"> 
      <FloatingWhatsApp
        phoneNumber={phoneNumber}
        accountName="Shafi ayurvedic and acupuncture" // Optional: Set your company name
        avatar="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" // Optional: Set your avatar image URL
        messageText="Hello, how can we help you?" // Optional: Set a default message
        onMessageReceived={onMessageReceived}

      />
    </div>
    )
  }
