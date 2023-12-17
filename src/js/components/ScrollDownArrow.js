import { useEffect, useState } from "react"
import sleep from "js/Utils/sleep"

function ScrollDownArrow() {
    const [visibility, setVisibility] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
    });

    useEffect(() => {
        setVisibility(scrollY < 100);
    }, [scrollY]);

    return (
        <div className="scroll-down-arrow">
            <div className={visibility ? 'fade-in' : 'fade-out'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96px" height="96px">
                    <path d="M2 11 L12 16 L22 11" stroke="white" strokeWidth=".5" fill="none" />
                </svg>
            </div>
        </div>
    );
}

export default ScrollDownArrow;