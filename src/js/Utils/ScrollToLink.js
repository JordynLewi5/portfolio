import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ScrollToLink() {
  const navigate = useNavigate();
  const location = useLocation();
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    const handleAnchorClick = (e) => {  
      e.preventDefault();

      const offset = 0;

      // Find the closest anchor element with an href attribute
      const targetAnchor = e.target.closest('a[href^="#"]');

      if (targetAnchor) {
        const targetId = targetAnchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop + offset,
            behavior: 'smooth',
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        if (location.pathname !== '/') {
          e.preventDefault();
          navigate('/'); // Navigate to the homepage
        }
        setShouldScroll(true); // Set the flag to scroll after navigation
        handleAnchorClick(e);
      });
    });

    // Clean up event listeners when the component unmounts
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [navigate, location]);

  useEffect(() => {
    if (shouldScroll) {
      // Scroll to the section after navigating to the homepage
      const offset = 0;
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop + offset,
          behavior: 'smooth',
        });
        setShouldScroll(false); // Reset the flag
      }
    }
  }, [shouldScroll, location.hash]);

  return null; // This component doesn't render anything, it just handles scrolling
}

export default ScrollToLink;
