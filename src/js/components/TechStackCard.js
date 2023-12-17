import { useEffect, useState } from "react"

function TechStackCard(props) {
    const [visibility, setVisibility] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
    });

    useEffect(() => {
        if (scrollY > props.scrollYThreshold + props.offset) {
            setVisibility(true);
        }
    }, [scrollY])
    
    return (
        <a href={props.href} target="__" className={`tech-stack-card ${visibility ? 'slide-in' : 'slide-out'}`}>
            {props.children}
        </a>
    )
}

export default TechStackCard