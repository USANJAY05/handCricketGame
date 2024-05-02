import React, { useRef } from 'react';
import clickSound from './click.wav'; // Import your click sound file

const ClickSoundButton = () => {
  const audioRef = useRef(new Audio(clickSound)); // Create a ref for the Audio object

  const handleClick = () => {
    audioRef.current.play(); // Play the click sound
  };

  return (
    <button onClick={handleClick}>Click Me</button> // Button with onClick event handler
  );
};

export default ClickSoundButton;
