import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const WhatsAppIcon = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    // Logic to redirect to WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
  };

  return (
    <div className="WhatsAppIcon" onClick={handleWhatsAppClick}>
      <AiOutlineWhatsApp style={{ fontSize: '3em', color: '#25d366' }} />
    </div>
  );
};

export default WhatsAppIcon;