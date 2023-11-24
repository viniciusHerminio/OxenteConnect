import React from 'react';
import { RiWhatsappFill } from "react-icons/ri";
import { useSpring, animated } from 'react-spring';

const WhatsAppIcon = ({ phoneNumber }) => {
  const [hovered, setHovered] = React.useState(false);

  const iconAnimation = useSpring({
    transform: `scale(${hovered ? 1.1 : 1}) rotate(${hovered ? 5 : 0}deg)`,
    onRest: () => setHovered(false), // Resetar a animação após a conclusão
  });

  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  return (
    <animated.div
      className="WhatsAppIcon"
      style={iconAnimation}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      <RiWhatsappFill />
    </animated.div>
  );
};

export default WhatsAppIcon;