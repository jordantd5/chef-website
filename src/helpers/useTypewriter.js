import { useEffect, useState } from 'react';

const useTypewriter = (text, speed = 20) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
  
    const typeCharacter = () => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        setTimeout(typeCharacter, speed);
      }
      i++;
    };
  
    typeCharacter(); 
  
  }, [text, speed]);

  return displayText;
};

export default useTypewriter;