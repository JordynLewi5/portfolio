import { useRef, useEffect, useState } from "react";

function SkillsCard(props) {
    const elementRef = useRef(null);
    const [visibility, setVisibility] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [elementYOffset, setElementYOffset] = useState(null);
    const [level, setLevel] = useState(0);
    const [levelDisplay, setLevelDisplay] = useState(0);

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

        const threshold = props.scrollYThreshold ? props.scrollYThreshold + props.offset : elementYOffset + props.offset;

        if (!visibility && elementYOffset && scrollY > threshold) {
            setVisibility(true);
            setLevel(props.level);
            for (let i = 0; i < props.level; i++) {
                setTimeout(() => {
                    setLevelDisplay(i + 1);
                }, i * 750 / props.level);
            }
        }
    }, [scrollY]);

    return (
        <div 
            ref={elementRef}
            className={`skill-card`}
            title={props.name}
        >
            <a href={props.href} target="__">
                <img src={props.src} alt={props.alt} className="image"/>
            </a>
            <div className="skill-section">
                <div className="level-bar">
                    <div className="level-bar-fill" style={{width: level + '%'}}>
                        <div className="level-bar-fill-text">{levelDisplay + '%'}</div>
                    </div>
                </div>
                <div className="mastery-level">
                    Mastery: {
                        levelDisplay === 100 ? 'Master' :
                        levelDisplay >= 90 ? 'Expert' : 
                        levelDisplay >= 80 ? 'Advanced' : 
                        levelDisplay >= 65 ? 'Intermediate' : 
                        levelDisplay >= 40 ? 'Beginner' : 
                        levelDisplay > 0 ? 'Novice' :  
                        levelDisplay === 0 ? 'N/A' : null
                    } 
                </div>
            </div>
        </div>
    );
}

export default SkillsCard;
