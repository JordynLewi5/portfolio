import { useEffect } from 'react';

function ScrollToLink() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      e.preventDefault();

      const offset = 50;

      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return null; // This component doesn't render anything, it just handles scrolling
}

export default ScrollToLink;
