import { useRef, useEffect, useState } from "react";

function ProjectCard(props) {
  const elementRef = useRef(null);
  const [visibility, setVisibility] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [elementYOffset, setElementYOffset] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (elementRef.current) {
      const yOffset = elementRef.current.getBoundingClientRect().top + window.scrollY;
      setElementYOffset(yOffset);
    }
  }, []);

  useEffect(() => {
    if (elementYOffset !== null) {
      const threshold = props.scrollYThreshold ? props.scrollYThreshold + props.offset : elementYOffset + props.offset;

      if (scrollY > threshold) {
        setVisibility(true);
      }
    }
  }, [scrollY, elementYOffset]);

  // Add a class for initial fading in when eligible
  const cardClassName = `${props.className} project-card ${visibility ? 'slide-in' : 'slide-out'}`;

  return (
    <a href={props.href} target={props.target} className={cardClassName} ref={elementRef}>
      <div className="image">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="description">
        <h2>{props.name}</h2>
        <div className="link">
          View Project ⮕
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
