import { useEffect, useState } from "react"

function ProjectCard(props) {
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
        <a href={props.href} target="__" className={`project-card ${visibility ? 'slide-in' : 'slide-out'}`}>
            {props.children}
        </a>
    )
}

export default ProjectCard